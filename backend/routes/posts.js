const express = require('express');
const multer = require('multer');
const Post = require('../models/Post');
const Comment = require('../models/Comment'); // Import du modèle Comment
const router = express.Router();

// Configure multer pour les fichiers uploadés
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route pour créer un nouveau post avec un fichier
router.post('/', upload.single('image'), async (req, res) => {
  const { userId, content } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const newPost = new Post({ userId, content, image });
    await newPost.save();
    res.status(201).json({ msg: 'Post created successfully', post: newPost });
  } catch (err) {
    console.error('Error creating post:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Route pour récupérer tous les posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('userId', 'firstName lastName')
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Route pour récupérer les commentaires d'un post
router.get('/:id/comments', async (req, res) => {
  const postId = req.params.id;

  try {
    const comments = await Comment.find({ postId }).populate('userId', 'firstName lastName');
    res.status(200).json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Route pour ajouter un commentaire à un post
router.post('/:id/comments', async (req, res) => {
  const { userId, text } = req.body;
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    const comment = new Comment({ postId, userId, text });
    await comment.save();

    post.comments.push(comment._id);
    await post.save();

    const populatedComment = await comment.populate('userId', 'firstName lastName');
    res.status(201).json(populatedComment);
  } catch (err) {
    console.error('Error adding comment:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
