const express = require("express"); 
const router = express.Router() ;
const {addSkills,getAll} = require("../controllers/skillsController" ) ;

router.post("/addSkills", addSkills) ; 
router.get("/getAll",getAll)  ; 
module.exports = router ; 