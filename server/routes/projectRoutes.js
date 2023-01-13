const express = require("express"); 
const router = express.Router() ; 
const {addProject,getAll,getOne,getCategory} = require("../controllers/projectController")
router.post("/addProject", addProject) ;  
router.get("/getAll" , getAll) ;
router.get("/getOne/:id" , getOne)
router.get("/getCategory/:category", getCategory)

module.exports = router ;