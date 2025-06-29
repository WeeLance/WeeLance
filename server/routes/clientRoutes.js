const express = require("express"); 
const router = express.Router() ;
const {addClient,getAll,updateOne,getOne,deleteOne} = require("../controllers/clientController" ) ;

router.post("/addClient", addClient) ; 
router.get("/getAll",getAll)  ; 
router.put("/updateOne/:id",updateOne);
router.get("/getOne/:id", getOne);
router.delete("/delete/:id",deleteOne);



module.exports = router ;