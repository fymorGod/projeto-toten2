const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express()


app.use(express.json())
app.use(cors)
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ideias'
})

app.post('/post-forms', (req, res)=> {
    const {ideia} = req.body; 
    const {setor} = req.body;

    let SQL = "INSERT INTO ideias (ideia, setor) VALUES (?, ?)";

    db.query(SQL,[ideia, setor], (err, result)=> {
        console.log(err);
    })
});

app.get('/', (req, res)=> {
    const SQL = "INSERT INTO ideias (ideias, setor) VALUES ('ok', 'marketing');";
    db.query(SQL, (err, result)=> {
        res.send('teste dados')
    })
    res.send('ok')
})

app.get('/forms', (req, res)=> {
    let SQL = "SELECT * FROM ideias";

    db.query(SQL, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, ()=> {
    console.log('Server is running')
})