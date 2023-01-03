const freelancer = require("../models/freelancerModel") ;


module.exports = {   
    addFreelancer : (req,res)=>{ 
        freelancer.add((error,results)=>{   
            if (error) res.status(500).send(error) 
            else res.status(200).json(results)
        },
        req.body.freelancer_id ,
        req.body.name , 
        req.body.email 
         )  



    },  
    getAll:(req,res)=>{  
        freelancer.get((error,results)=>{  
            if(error) res.status(500).send(error) 
            else res.status(200).json(results)
      })

    }
}