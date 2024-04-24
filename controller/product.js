const fs = require("fs");
const model = require("../model/product");
const mongoose = require("mongoose");

const Product = model.Product;
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

// MVC model-view-controller
exports.createProduct = (req, res) => {
  // console.log(req.body);
  // products.push(req.body);

  const product = new Product(req.body);
  // product.title = "Phone x";
  // product.price = 999;
  // product.rating= 5;

  // async function demo() {
  //   const res = await product.save();
  //   console.log(res);
  // }

  product
    .save()
    .then(() => {
      res.status(201).json(req.body);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
exports.getProduct = async (req, res) => {
  // :id is variable ,it is an url parameter
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async (req, res) => {
  // :id is variable ,it is an url parameter
  const id = req.params.id;
  const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).json(doc);
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(201).json(doc);
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndDelete({ _id: id });
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1);
  res.status(201).json(doc);
};
