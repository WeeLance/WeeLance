const conn = require("../db/index");
module.exports = {   
    add: (callback,fl_id,skill_id) => {
        const sql = `insert into skills_fl (freelancer_freelancer_id,skills_skills_id) values ("${fl_id}",${skill_id})`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })

    } ,
    get: (callback) => {
        const sql = `SELECT * FROM skills_fl`;
        conn.query(sql, (error, results) => {
          callback(error, results);
        });
      }, 

      getAll :(callback,id) => {
        const sql = `SELECT skills.skill FROM skills_fl 
        JOIN skills  ON skills_skills_id= skills_id 
        WHERE freelancer_freelancer_id = "${id}";
        `;
        conn.query(sql, (error, results) => {
          callback(error, results);
        });
      }, 




}