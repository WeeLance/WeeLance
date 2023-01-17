const express = require("express"); 
const router = express.Router() ;
const {addSkills,getAll,getSkills} = require("../controllers/flSkillController" ) ;

router.post("/addSkill", addSkills) ; 
router.get("/getAll",getAll)  ;  
router.get("/freelancerSkills/:id",getSkills)
module.exports = router ; 