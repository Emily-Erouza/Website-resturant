const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Schemas");
const cors = require("cors");


const app = express();
app.use(cors());

const url2 = "mongodb+srv://emilysbongile17:Emily.20@cluster0.9ucgs2k.mongodb.net/?retryWrites=true&w=majority"
console.log(url2)
mongoose.connect(url2).then(res => console.log("conntected")).catch(e => console.log("eeeee", e))


app.get("/users", (req, res) => {
    UserModel.find({}).then(function(users){
      res.json(users)
      
    }).catch(function(err){
      console.log(err)
  
    })
  });
  
  app.post("/users", async (req, res) => {
    try{
      const user = await new UserModel(req.body).save();
      res.send(200);
    }catch(e){
      console.log(e);
    }
  });
  
  
  app.listen(4000, () => {
    console.log("listening to port 4000");
  })