let posts = [];

const getPosts = () => posts;

const getPostById = (id) => {
    return posts.find(p => p.id === id);
};

const createPost = (post) => {
    posts.push(post);
    return post;
};

const updatePost = (id, data) => {
    const index = posts.findIndex(p => p.id === id);
    if(index !== -1){
        posts[index] = {...posts[index], ...data};
        return posts[index];
    }
};

const deletePost = (id) => {
    posts = posts.filter(p => p.id !== id);
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};