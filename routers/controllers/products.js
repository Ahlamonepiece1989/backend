const productsModel = require("../../db/models/productsModel");


// Add new products
const addProducts = async (req, res) => {


  const { title, price, imgLink} = req.body;



  const newProducts = new productsModel({title:title, price:price, imgLink:imgLink});

  console.log(newProducts);

  try {
      const savedProduct= await newProducts.save()
      res.status(200).json(savedProduct)

  }catch (error){

      res.send(error);

  }

}


// Get all products.
const products = async (req,res)=>{

    try {

        const products = await productsModel.find({});
        res.status(200).json(products);

    } catch (error){

        res.send(error);

    }
}

module.exports = {products, addProducts};