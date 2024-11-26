const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');

// In-memory storage for posts
let posts = [];

// Export posts for use in routes
module.exports.posts = posts;

// Route for posts
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

// Home route
app.get('/', (req, res) => {
  res.render('pages/home', { posts });
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
