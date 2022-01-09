const mongoose = require("mongoose");


const option = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};


const uri = "mongodb+srv://user:user@cluster0.o9ihj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(uri, option).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);

