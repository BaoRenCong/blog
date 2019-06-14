const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true
});

module.exports = {
  getValue(req, res, next) {
    let nid = req.query.nid;
    console.log(nid);
    pool.getConnection((err, connection) => {
      let sql = sqlMap.getValue;
      connection.query(sql, [nid], (err, result) => {

        if (err) {
          console.log(err)
        }
        if (result) {
          console.log(result)
          res.json(result);
        }
        connection.release();
      })
    })
  },
  setValue(req, res, next) {
    console.log(req.body);
    let id = req.body.id, name = req.body.name;
    pool.getConnection((err, connection) => {
      let sql = sqlMap.setValue;
      connection.query(sql, [name, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getNotes(req, res, next) {
    console.log(req.body);
    pool.getConnection((err, connection) => {
      let sql = sqlMap.getNotes;
      connection.query(sql, (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  }
}
