const project = require("../models/projectModel") ; 


module.exports = {   

    addProject: (req, res) => {
        project.add((error, results) => {
            if (error) res.status(500).send(error)
            else res.status(200).json(results)
        },
            req.body.project_name,
            req.body.project_category,
            req.body.project_description, 
            req.body.client_id
        )



    }, 
    getAll: (req, res) => {
        project.get((error, results) => {
            if (error) res.status(500).send(error)
            else res.status(200).json(results)
        })

    }, 
    getOne : (req,res)=> {
     
        project.getOne((error,results)=>{
            if (error) res.status(500).send(error)
            else res.status(200).json(results)
         },req.params.id)
    },  

    getCategory: (req,res)=> {
     
        project.getCat((error,results)=>{
            if (error) res.status(500).send(error)
            else res.status(200).json(results)
         },req.params.category)
    },  
    
}