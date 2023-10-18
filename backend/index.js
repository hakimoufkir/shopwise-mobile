const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const apiPort = 3000;

// CORS Configuration
const corsOptions = {
  origin: "http://192.168.1.103:8081", // Change this to the specific origin of your React Native app
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(bodyParser.json());

const db = require("./db");
const postRouter = require("./routes/post-router");
const userRouter = require("./routes/user-router");
app.use("/api/postsR", postRouter);
app.use("/api/usersR", userRouter);

db.connectToDB();

app.get("/", (req, res) => {
  res.send("démarage.....");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
