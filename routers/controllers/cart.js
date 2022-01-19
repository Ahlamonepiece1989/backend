const cartModel = require("../../db/models/cartModel");


const addCart = async (req, res) => {


    const { cartItem } = req.body;


    console.log(cartItem);

  
  
    try {

        const savedCart = await cartModel.insertMany(cartItem);


        console.log(savedCart);
        

        res.status(200).json(savedCart);
  
    }catch (error){
  
        res.send(error);
  
    }
  
  }


  module.exports = {addCart};