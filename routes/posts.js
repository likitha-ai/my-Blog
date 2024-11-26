const express = require('express');
const router = express.Router();
const { createPost, viewPost, editPost, updatePost, deletePost } = require('../controllers/posts');

// Route to create a new post
router.post('/new', createPost);

// Route to view a post by ID
router.get('/:id', viewPost);

// Route to edit a post by ID
router.get('/edit/:id', editPost);

// Route to update a post by ID
router.post('/edit/:id', updatePost);

// Route to delete a post by ID
router.post('/delete/:id', deletePost);

module.exports = router;
