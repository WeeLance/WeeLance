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

    }, 
    updateOne : (req,res)=>{ 
        freelancer.update((error,results)=>{   
            if (error) res.status(500).send(error) 
            else res.status(200).json(results)
        }, 
        req.body.fl_phone_number, 
        req.body.github_link, 
        req.body.portfolio_link, 
        req.body.category, 
        req.body.fl_name,  
        req.body.fl_bio,  
        req.body.fl_image,  
        req.params.id
         )  



    }, 
    updatePhoto : (req,res)=>{ 
        freelancer.updateP((error,results)=>{   
            if (error) res.status(500).send(error) 
            else res.status(200).json(results)
        }, 
      
        req.body.fl_image,  
        req.params.id
         )  



    }, 
    getOne : (req,res)=>{  
        freelancer.getO((error,results)=>{  
            if(error) res.status(500).send(error) 
            else res.status(200).json(results)
      },req.params.id)

    }
}