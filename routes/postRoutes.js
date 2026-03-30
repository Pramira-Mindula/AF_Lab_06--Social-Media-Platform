const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");

const multer = require("multer");

const storage = multer.diskStorage({
    destination:"uploads/",
    filename:(req,file,cb)=>{
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({storage});

router.get("/", postController.getPosts);
router.post("/", auth, upload.single("image"), postController.createPost);
router.put("/:id", auth, postController.updatePost);
router.delete("/:id", auth, postController.deletePost);
router.get("/view", postController.viewPosts);

module.exports = router;