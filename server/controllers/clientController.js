const client = require("../models/clientModel") ;


module.exports = {   
    addClient : (req,res)=>{ 
        client.add((error,results)=>{   
            if (error) res.status(500).send(error) 
            else res.status(200).json(results)
        },
        req.body.client_id ,
        req.body.name , 
        req.body.email 
         )  



    },  
    getAll:(req,res)=>{  
        client.get((error,results)=>{  
            if(error) res.status(500).send(error) 
            else res.status(200).json(results)
      })

    }
}