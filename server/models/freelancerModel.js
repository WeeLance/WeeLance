const conn = require("../db/index") ; 

module.exports = {  
    add : (callback,freelancer_id , name , email)=>{  
        const sql = `insert into freelancer (freelancer_id,fl_name,fl_email) values ("${freelancer_id}" ,"${name}","${email}")` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )

    }, 
    get :(callback  )=>{ 
        const sql = `SELECT * FROM freelancer  ` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )
    }
}