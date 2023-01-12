const conn = require("../db/index");

module.exports = {
    add: (callback, client_id, name, email) => {
        const sql = `insert into client (client_id,client_name,client_email) values ("${client_id}" ,"${name}","${email}")`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })

    },
    get: (callback) => {
        const sql = `SELECT * FROM client  `
        conn.query(sql, (error, results) => {
            callback(error, results)
        })
    },
    getOne:  (callback, client_id ) =>{
        const sql = `select * from client WHERE client_id ="${client_id}" ;`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })
    },
    update: (callback, company_name, client_name, phone_number, company_link, company_adress, client_id) => {
        const sql = `Update client set company_name = "${company_name}", client_name = "${client_name}", phone_number = ${phone_number}, company_link = "${company_link}", company_adress = "${company_adress}" WHERE client_id ="${client_id}" ;`
        conn.query(sql, (error, results) => {
            callback(error, results)
        })
    },
    getO: (callback, id) => {
        const sql = `SELECT * FROM client WHERE client_id ="${id}"`;
        conn.query(sql, (error, results) => {
          callback(error, results);
        });
      }

}