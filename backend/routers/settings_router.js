const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.put("/accUpdate/:id", function (req, res) {
    const {fname, sname, newPwd} = req.body;
    const userId = req.params.id;
    // ----------------
    User.updateOne({_id: userId}, {firstName: fname, lastName: sname, password: newPwd}).then(function(update){
     console.log(update)
     res.status(200).json({message:"Updated Successfully"})
    })
    
   
  });

  router.get("/:id", function(req, res){
    User.findOne({_id: req.params.id}).then(function(result){
        res.json(result)
    })
  })


module.exports = router