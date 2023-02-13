// const express = require('express');
// const routes = express.Router();
// const db = require('./db');

// routes.get("/receitas", (req, res) => {
//     let query = "SELECT * FROM receitas";
//     db.query(query, (err,result) => {
//         if (err){
//             return console.log("Erro na consulta: "+ err);
//         }
        
//         return res.status(200).send(result);
        
//     })
// });

// module.exports=routes;