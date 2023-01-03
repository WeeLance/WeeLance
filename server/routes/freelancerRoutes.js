const express = require("express"); 
const router = express.Router() ;
const {addFreelancer,getAll} = require("../controllers/freelancerController" ) ;

router.post("/addFreelancer", addFreelancer) ; 
router.get("/getAll",getAll)  ;
module.exports = router ;