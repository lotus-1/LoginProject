const database = require('../database/db_connection.js');

const get = cb =>{
  database.query("SELECT * FROM users WHERE email=$1 and password=$2, [email, password]", (err, res)=>{
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = get;
