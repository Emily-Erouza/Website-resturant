const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Schemas");
const cors = require("cors");
const port = process.env.PORT || 5000

const app = express();
app.use(cors());




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
  
  
  app.listen(port, () => {
    console.log("listening to port 5000");
  })