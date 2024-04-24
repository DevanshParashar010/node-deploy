// express part ↓
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://devanshDb_123:devanshDb_123@cluster01.p40tsmy.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster01"
  );
  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// body Parser
server.use(cors());
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("build"));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
// Ye ↑ iska ↓ i.e productRouter ko use krne ka middleware h,server ab api path par ye router attach kr dega. ab se iska path hogya h api/products ya api/something ,/api ki jagah only / bhi de sakte h

// Aisa krne se hume flexibility milte h naming me and hum routes ko alag folder me rakh sakte h

server.listen(8080, () => {
  console.log("server started ");
});
