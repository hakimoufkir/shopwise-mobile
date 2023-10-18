const Post = require("../models/post-model");

const createPost = async (req, res) => {
  try {
      const { updatedFormData } = req.body;

      if (!updatedFormData) {
          return res.status(400).json({
              success: false,
              error: 'You must provide post data',
          });
      }

      const newPost = new Post(updatedFormData);

      if (!newPost) {
          return res.status(400).json({ success: false, error: 'Failed to create post' });
      }

      const savedPost = await newPost.save();

      if (savedPost) {
          return res.status(201).json({
              success: true,
              id: savedPost._id,
              message: 'Post created!',
          });
      }
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error,
          message: 'Post not created!',
      });
  }
};

const updatePost = async (req, res) => {
  try {
      console.log("updatePost");
      // Implement your update logic here

      // Example: Updating a post with provided data
      const { postId } = req.params;
      const updatedData = req.body;

      const updatedPost = await Post.findByIdAndUpdate(postId, updatedData, { new: true });

      if (!updatedPost) {
          return res.status(404).json({ success: false, error: 'Post not found' });
      }

      return res.status(200).json({
          success: true,
          updatedPost,
          message: 'Post updated!',
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error,
          message: 'Failed to update post',
      });
  }
};

const deletePost = async (req, res) => {
  try {
      const { postId } = req.body;

      if (!postId) {
          return res.status(400).json({
              success: false,
              error: 'You must provide a post ID',
          });
      }

      const deletedPost = await Post.findByIdAndRemove(postId);

      if (!deletedPost) {
          return res.status(404).json({ success: false, error: 'Post not found' });
      }

      return res.status(200).json({
          success: true,
          message: 'Post deleted successfully',
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error,
          message: 'Failed to delete post',
      });
  }
};

const getPostById = async (req, res) => {
  try {
      const { idPost } = req.body;

      if (!idPost) {
          return res.status(400).json({
              success: false,
              error: 'You must provide a post ID',
          });
      }

      const postById = await Post.findById(idPost);

      if (!postById) {
          return res.status(404).json({ success: false, error: 'Post not found' });
      }

      return res.status(200).json({
          success: true,
          postById,
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error,
          message: 'Failed to get post by ID',
      });
  }
};


const getPosts = async (req, res) => {
  try {
      const posts = await Post.find({}).populate("title");

      return res.status(200).json(posts);
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error,
          message: 'Failed to fetch all posts',
      });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
};
