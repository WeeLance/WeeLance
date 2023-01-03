const conn = require("../db/index") ; 

module.exports = {  
    add : (callback,client_id , name , email)=>{  
        const sql = `insert into client (client_id,client_name,client_email) values ("${client_id}" ,"${name}","${email}")` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )

    }, 
    get :(callback  )=>{ 
        const sql = `SELECT * FROM client  ` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )
    }
}