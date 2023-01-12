const express = require("express"); 
const router = express.Router() ;
const {addFreelancer,getAll,updateOne,getOne} = require("../controllers/freelancerController" ) ;

router.post("/addFreelancer", addFreelancer) ; 
router.get("/getAll",getAll)  ; 
router.put("/updateOne/:id", updateOne) ;
 router.get("/getOne/:id", getOne)
module.exports = router ; 



 