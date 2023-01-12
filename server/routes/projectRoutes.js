const express = require("express"); 
const router = express.Router() ; 
const {addProject,getAll,getOne} = require("../controllers/projectController")
router.post("/addProject", addProject) ;  
router.get("/getAll" , getAll) ;
router.get("/getOne/:id" , getOne)


module.exports = router ;