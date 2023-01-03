const express = require("express"); 
const router = express.Router() ;
const {addClient,getAll} = require("../controllers/clientController" ) ;

router.post("/addClient", addClient) ; 
router.get("/getAll",getAll)  ; 

module.exports = router ;