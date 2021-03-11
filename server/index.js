const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactcrud',
});


app.get('/', (req, res) => {
    
    // const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('LOTR', 'Excellent')";
    // db.query(sqlInsert, (err, result) => {
    //     res.send("hello world")
    // });


}) 


app.listen(3001, () => {
    console.log("running")
})