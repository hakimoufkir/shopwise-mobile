const { connectToDB } = require('../db'); // Update the path based on your project structure
const User = require("../models/user-model");
const { ObjectId } = require("mongodb"); // Import the ObjectId function from the MongoDB package

const createUser = async (req, res) => {
  try {
      const userData = req.body;
      const { email, username } = userData;

      // Check if a user with the same email or username already exists
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });

      if (existingUser) {
          return res.status(200).json({
              success: true,
              user: existingUser,
              message: 'User already exists!',
          });
      }

      // Create a new User instance using the user data
      const newUser = new User(userData);

      // Save the new user to the database
      const savedUser = await newUser.save();

      return res.status(201).json({
          success: true,
          user: savedUser,
          message: 'User created!',
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          error,
          message: 'User not created!',
      });
  }
};


const updateUser = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const { userId } = req.params;

    // Extract updated user data from the request body
    const updatedUserData = req.body;

    // Find and update the user by ID
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    return res.status(200).json({
      success: true,
      updatedUser,
      message: "User updated!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error,
      message: "Failed to update user",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const { userId } = req.params;

    // Find and delete the user by ID
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error,
      message: "Failed to delete user",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    // Extract user ID from the request parameters
    const { userId } = req.params;
    console.log(userId);

    const userObjectId = ObjectId(userId);

    // Find the user by ID
    const userById = await User.findById(userObjectId);

    if (!userById) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    return res.status(200).json({
      success: true,
      userById,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error,
      message: "Failed to get user by ID",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    await connectToDB();
    console.log("getUsers starting ...");
    const users = await User.find({});
    console.log(users);

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error,
      message: "Failed to fetch all users",
    });
  }
};

const getUserByEmailAndUsername = async (req, res) => {
  try {
    const { email, username } = req.body;

    const user = await User.findOne({ email, username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: 'Failed to search for user' });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
  getUserByEmailAndUsername
};
