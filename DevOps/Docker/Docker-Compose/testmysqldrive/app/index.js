const express = require('express');
const app = express();
const mysql = require('mysql');
let pool = null;

app.get('/', (req, res) => {
    res.send("GET Request Called")
})

app.get('/fetchDB', (req, res) => {
    if (!pool) {
        pool = mysql.createPool({
            host: "docker-mysql",
            user: "root",
            password: "nodejs",
            database: "sample_DB",
            port: 3306
        });
    }
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.send(err.message);
        } else {
            connection.release();
            res.send("Connection success")
        }
    });
})

app.listen(5000)