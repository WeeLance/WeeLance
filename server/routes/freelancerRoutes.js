const express = require("express"); 
const router = express.Router() ;
const {addFreelancer,getAll,updateOne,getOne,updatePhoto ,getByy,deleteOne} = require("../controllers/freelancerController" ) ;

router.post("/addFreelancer", addFreelancer) ; 
router.get("/getAll",getAll)  ; 
router.put("/updateOne/:id", updateOne) ;
router.put("/updatePhoto/:id", updatePhoto) ;
 router.get("/getOne/:id", getOne);
 router.get("/getByy/:category", getByy);
router.delete("/delete/:id", deleteOne);
module.exports = router ; 



 