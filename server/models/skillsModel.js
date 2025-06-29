const conn = require("../db/index");
module.exports = {   
    add: (callback,skill) => {
        const sql = `insert into skills (skill) values ("${skill}")`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })

    } ,
    get: (callback) => {
        const sql = `SELECT * FROM skills`;
        conn.query(sql, (error, results) => {
          callback(error, results);
        });
      },
 deleteO: (callback, id) => {
        const sql = `DELETE FROM skills WHERE skills_id =${id}`;
        conn.query(sql, (error, results) => {
          callback(error, results);
        });         



}} 