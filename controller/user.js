const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const path = require("path");
// const data = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "../data.json", "utf-8"))
// );
// const users = data.users;

// MVC model-view-controller
exports.createProduct = (req, res) => {
  console.log(req.body);
  users.push(req.ody);
  res.status(201).json(req.body);
};
exports.getAllProducts = (req, res) => {
  res.json(users);
};
exports.getProduct = (req, res) => {
  // :id is variable ,it is an url parameter
  const id = +req.params.id;
  const product = users.find((p) => p.id === id);
  res.json(product);
};
exports.replaceProduct = (req, res) => {
  // :id is variable ,it is an url parameter
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  users.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = users.findIndex((p) => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex, 1);
  res.status(201).json(product);
};
