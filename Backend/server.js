const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "flashcard"
})  

app.get('/',(re, res)=>{
    return res.json("From backend")
})

app.get('/cards',(req, res)=>{
    const sql = "SELECT * FROM card"
    db.query(sql,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// insert a new card into the database
app.post('/cards', (req, res) => {
    const { question, answer } = req.body;
    const sql = "INSERT INTO card (question, answer) VALUES (?, ?)";
    db.query(sql, [question, answer], (err, result) => {
        if (err) return res.status(500).json(err);
        // send back the created card with its new id
        const newCard = {
            id: result.insertId,
            question,
            answer,
        };
        res.json(newCard);
    });
});

// delete a card from the database
app.delete('/cards/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM card WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, id });
    });
});

// update a card in the database
app.put('/cards/:id', (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    const sql = "UPDATE card SET question = ?, answer = ? WHERE id = ?";
    db.query(sql, [question, answer, id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, id, question, answer });
    });
});

app.listen(8081,()=>{
    console.log("listening")
})