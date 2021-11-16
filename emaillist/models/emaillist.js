const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
            //await를 쓰기 때문에 async 사용
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


        //이미 다지나간뒤 출력될 가능성이 높음(작동 X)
        // conn.query('select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc', [], function(error, results, field) { 
        //     return results;
        // });
        
        try {
            return await query('select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc', []);
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(emaillist) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query(
                'insert into emaillist(first_name, last_name, email) values(?, ?, ?)', 
                Object.values(emaillist)    //배열로 만들어줌
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }

    }
}