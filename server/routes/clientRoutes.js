const express = require("express"); 
const router = express.Router() ;
const {addClient} = require("../controllers/clientController" ) ;

router.post("/addClient", addClient) ;  
module.exports = router ;