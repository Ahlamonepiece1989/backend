const productsModel = require("../../db/models/productsModel");

//method to post new products
const addProducts = async (req, res) => {
  const { title, price, imgLink } = req.body;

  try {
    const newProducts = new productsModel({
      title: title,
      price: price,
      imgLink: imgLink,
    });
    const savedProduct = await newProducts.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.send(error);
  }
};
//method to get(find)products in the database
const products = async (req, res) => {
  try {
    const products = await productsModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { products, addProducts };