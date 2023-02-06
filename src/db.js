const mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "receitas"
});

db.getConnection((err, con) => {
    if(err){
        return console.log("A conexao com o banco falhou: " + err);
    } else {
        console.log("Conexao feita com sucesso!");
        return con;
    }
})

module.exports = db;