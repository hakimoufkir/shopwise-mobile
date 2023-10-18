const mongoose = require("mongoose");

let isConnected = false;

mongoose.set('strictQuery', false);

// console.log(process.env.MONGODB_URI)

const connectToDB = async () => {
  // mongoose.set('srtictQuery',true);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ShopWiseDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(" =============> MongoDB is connected <=============");
  } catch (error) {
    console.log("error connecting to MongoDB");
    console.log(error);
  }
};

module.exports = { connectToDB }; // Export the function
