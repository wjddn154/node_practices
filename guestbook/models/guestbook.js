const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
    findAll: async function(callback) {
        const conn = dbconn();

        // const query = function(sql, data) {
        //     return new Promise(function(resolve, reject) {
        //         conn.query(sql, [], function(error, results, field) { 
        //             return error ? reject(error) : resolve(results);
        //         });
        //     })
        // }

        //위에 주석과 동일 기능
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, field) => (error ? reject(error) : resolve(results))))
        
        //위에 주석들과 동일 기능 / 추천하는 방법
        const query = util.promisify(conn.query).bind(conn);


        
        try {
            return await query('select no, name, password, message, reg_date as regDate from guestbook order by reg_date desc', []);
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(guestbook) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query(
                'insert into guestbook(no, name, password, message, reg_date) values(null, ?, ?, ?, now())', 
                Object.values(guestbook)    //배열로 만들어줌
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }

    }
}