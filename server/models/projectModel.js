const conn = require("../db/index");
module.exports = {   
    add: (callback, project_name, project_category, project_description,client_id) => {
        const sql = `insert into project (project_name,project_category,project_description,client_client_id) values ("${project_name}" ,"${project_category}","${project_description}","${client_id}")`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })

    } , 
    get: (callback) => {
        const sql = `SELECT * FROM project  `
        conn.query(sql, (error, results) => {
            callback(error, results)
        })
    },
    getOne:  (callback, client_id ) =>{
        const sql = `select * from project WHERE client_client_id ="${client_id}" ;`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })
    }, 
    getCat : (callback, category ) =>{
        const sql = `select * from project WHERE project_category ="${category}" ;`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })
    }




}