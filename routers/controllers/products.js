const productsModel = require("../../db/models/productsModel");


// Add new products
const addProducts = async (req, res) => {


  const { title, price, imgLink, occasionType} = req.body;



  const newProducts = new productsModel({title:title, price:price, imgLink:imgLink, occasionType:occasionType});

  console.log(newProducts);

  try {
      const savedProduct= await newProducts.save()
      res.status(200).json(savedProduct)

  }catch (error){

      res.send(error);

  }

}

//method for  delete request 
const removeProducts = async (req, res) => {
//send id by params
  const id = req.params.id;


  console.log(id);


  try{

//declare var ()
    const deleteProduct = await productsModel.deleteOne({_id: id});

    console.log(deleteProduct);


    res.status(200).json(deleteProduct);


  }catch (error) {

    res.send(error);

  }




}


const updateProducts = async (req, res) => {


  const { id,title, price, imgLink, occasionType} = req.body;


const product = new productsModel(
//to store new edits
 {


 _id: id,
 title: title,
 price: price,
 imgLink: imgLink,
 occasionType: occasionType


 }

   );
console.log(id);

 try{

//تبحث عن العنصر ب الي دي  يحتاج تعديل,ومعاه البيانات المعدله
   const updateProduct = await productsModel.updateOne({_id: id}, product);

   console.log(updateProduct);


   res.status(200).json(updateProduct);


 }catch (error) {

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

module.exports = {products, addProducts, removeProducts,updateProducts};
