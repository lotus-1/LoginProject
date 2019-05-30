const database = require('../database/db_connection.js');

const post = (id, email, password, cb) => {
  database.query(
    "INSERT INTO users (id, email, password) VALUES ($1, $2, $3)",[id, email,password],
    (err,res) => {
      if (err) {
        return (err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = post;
