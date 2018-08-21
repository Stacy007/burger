


var connection = require("./connection.js");


var orm = {
  selectAll: function(tableInput/*"burgers"*/,cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += "(";
    queryString += cols.toString();
    queryString += ")";
    queryString += " VALUES (?,?)";

    //console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function(table, cols, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += "devoured = ?";
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, [cols.devoured], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;