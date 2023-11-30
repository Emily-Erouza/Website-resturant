// This require was incorrect
const Form = require("../models/Schemas");

const saveForm = (app) => {

  /**
   * You normally wouldn't give different endpoints for operations,
   * instead you would rely on the http verbs (GET, POST, PUT, DELETE)
   * 
   * So for example, you would have,
   * 
   * ```
   * 
   * ...
   * 
   * app.post("users", ...)
   * 
   * ...
   * 
   * app.get("users/:id", ...)
   * 
   * ...
   * 
   * app.put("users/:id", ...)
   * 
   * ...
   * 
   * app.delete("users/:id", ...)
   * 
   * ...
   * 
   * ```
   * 
   * Note also that I've used the endpoint `users` as it's more descriptive of the model that you're working with
   */
  app.post("/Form", async (req, res) => {
    try {
      let { userName, emailAdress, homeAddress, BankName,AccNumber,Items} = req.body;
      let Form = new Form({
        userName,
        emailAdress,
        homeAddress,
        BankName,
        AccNumber,
        Items
      });

      const FormSave = await Form.save();
      res.send({
        massage: "Succesfully Saved",
        FormSave,
      });
    } catch (error) {
      console.log();
      res.send({ message: "Post Error" }).status(404);
    }
  });

  // A better name for this might be 
  app.get("/FormDetails", async (req, res) => {
    try {
      const findForm= await Form.find();
      res.send(findForm);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });

  app.get("/details/:id", async (req, res) => {
    try {
      const findForm = await Form.findById(req.body.id);
      res.send(findForm);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });

  app.put('/update/:id', async (req,res) =>{
   const { id } = req.params;
   let { userNamename, emailAdress, homeAddress,BankName, AccNumber, Items, } = req.body;

   try {
 const update = await Form.findOneAndUpdate(req.body.id,
        { _id: `${id}` },
        {userNamename, emailAdress, homeAddress,BankName,AccNumber,Items} )
        res.send({ message: "Succesfully Updated", update });
   } catch (error) {
      console.log({ message: "Editing Unsuccesfully" });
   }
  })

  app.delete('/delete/:id', async (req, res) =>{
   try {
      const { id } = req.params;
      const deleteFormDetails = await Form.deleteOne({id:id})
      
      res.send({ message: "Succesfully Updated", deleteFormDetails});
   } catch (error) {
      console.log({ message: "Deleting Unsuccesfully" })
      res.sendStatus(404)
   }
  });

};
module.exports = {saveForm}