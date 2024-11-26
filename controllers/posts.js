const { posts } = require('../app'); // Import the posts array

const createPost = (req, res) => {
  const { title, content } = req.body;
  const id = posts.length + 1;
  const newPost = { id, title, content };
  posts.push(newPost);
  res.redirect('/');
};

const viewPost = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.render('pages/post', { post });
  } else {
    res.status(404).send({ message: 'Post not found' });
  }
};

const editPost = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.render('pages/edit_post', { post });
  } else {
    res.status(404).send({ message: 'Post not found' });
  }
};

const updatePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/');
  } else {
    res.status(404).send({ message: 'Post not found' });
  }
};

const deletePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
    res.redirect('/');
  } else {
    res.status(404).send({ message: 'Post not found' });
  }
};

module.exports = {
  createPost,
  viewPost,
  editPost,
  updatePost,
  deletePost,
};
