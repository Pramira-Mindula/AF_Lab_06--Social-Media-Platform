const Post = require("../models/postModel");

//get posts
exports.getPosts = (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = 5;

    const posts = Post.getPosts();
    const start = (page - 1) * limit;
    const paginated = posts.slice(start, start + limit);

    res.json(paginated);
};

exports.findPostById = (id) => {
    return posts.find(post => post.id === id);
};

//create posts
exports.createPost = (req, res) => {

    const { title, content } = req.body;

    const newPost = {
        id: Date.now().toString(),
        title,
        content,
        image: req.file ? req.file.filename : null,
        userId: req.user.id,        // logged user id
        username: req.user.username, // logged username
        createdAt: new Date()
    };

    Post.createPost(newPost);

    res.json({ message: "Post created successfully", post: newPost });
};

//update posts
exports.updatePost = (req, res) => {

    const id = req.params.id;

    const updated = Post.updatePost(id, req.body);

    res.json(updated);
};

//delete posts
exports.deletePost = (req, res) => {

    const id = req.params.id;

    // find the post first
    const post = Post.getPostById(id); // <-- you need this method in your Post model

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    // check if logged-in user is the owner
    if (post.username !== req.user.username) {
        return res.status(403).json({ message: "Unauthorized" });
    }

    // delete the post
    Post.deletePost(id);

    res.json({ message: "Post deleted" });
};

// Render posts page
exports.viewPosts = (req, res) => {
    const posts = Post.getPosts();

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const start = (page - 1) * limit;
    const paginatedPosts = posts.slice(start, start + limit);

    res.render("posts", { posts: paginatedPosts, page, user: req.session.user || null });
};