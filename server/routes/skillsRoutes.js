const express = require("express"); 
const router = express.Router() ;
const {addSkills,getAll,deleteOne} = require("../controllers/skillsController" ) ;

router.post("/addSkills", addSkills) ; 
router.get("/getAll",getAll)  ; 
router.delete("/delete/:id",deleteOne);
module.exports = router ; 