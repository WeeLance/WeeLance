const express = require("express"); 
const router = express.Router() ;
const {addClient,getAll,updateOne} = require("../controllers/clientController" ) ;

router.post("/addClient", addClient) ; 
router.get("/getAll",getAll)  ; 
router.put("/updateOne/:id",updateOne);

module.exports = router ;