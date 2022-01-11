//MySQL Connection
const connection = () => {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "1234",
        database: "tallerservidores"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return con;
}

exports.connection = connection;
