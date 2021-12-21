const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user:user@cluster0.o9ihj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
