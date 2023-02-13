const express = require('express');
const server = express();
// const routes = require("./src/routes");
const db = require('./src/db');

// server.use(express.json());

// server.use("/", routes);
server.get("/", (req, res) =>{
    
    res.send("Bem vindo a API da Equipe Rocket!")
})
// server.get("/receitas", (req, res)=>{
//     let query = "SELECT * FROM receitas"

//     db.query(query, (err, result)=>{
//         if(err){
//             return console.log("Erro na consulta: "+ err)
//         }

//         return res.status(200).send(result)
//     })
// })
server.get(["/receitas","/receitas/:tipo"], (req,res) =>{
    if(req.params.tipo){
        console.log(req.params)
    let query = `SELECT * FROM receitas WHERE tipo="${req.params.tipo}"`
    db.query(query, (err, result)=>{
        if(err){
            return console.log("Erro na consulta: "+ err)
        }

        return res.status(200).send(result)
    })
    }else{
        let query = "SELECT * FROM receitas"

        db.query(query, (err, result)=>{
            if(err){
                return console.log("Erro na consulta: "+ err) 
            }
    
            return res.status(200).send(result)
        })
    }
    
})


server.listen(8080, () => {
 console.log("ta funcionando");
}
);
