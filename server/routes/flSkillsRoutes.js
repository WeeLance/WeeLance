const express = require("express"); 
const router = express.Router() ;
const {addSkills,getAll,getSkills,deleteOne} = require("../controllers/flSkillController" ) ;

router.post("/addSkill", addSkills) ; 
router.get("/getAll",getAll)  ;  
router.get("/freelancerSkills/:id",getSkills)
router.delete("/delete/:id",deleteOne);
module.exports = router ; 