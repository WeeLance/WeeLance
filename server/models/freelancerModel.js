const conn = require("../db/index") ; 

module.exports = {  
    add : (callback,freelancer_id , name , email)=>{  
        const sql = `insert into freelancer (freelancer_id,fl_name,fl_email) values ("${freelancer_id}" ,"${name}","${email}")` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )

    }, 
    get :(callback  )=>{ 
        const sql = `SELECT * FROM freelancer` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )
    } , 
    update : (callback,fl_phone_number , github_link , portfolio_link,category,name,id)=>{  
        const sql = `UPDATE freelancer SET  fl_phone_number = ${fl_phone_number},github_link = "${github_link}",portfolio_link = "${portfolio_link}",category = "${category}",fl_name =" ${name}"
        WHERE freelancer_id = "${id} "` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )

    } , 
    getO : (callback ,id )=>{ 
        const sql = `SELECT * FROM freelancer WHERE freelancer_id ="${id}"` 
        conn.query(sql ,(error,results)=> { 
            callback(error,results)
        } )
    }
}