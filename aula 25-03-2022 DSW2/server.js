const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyparser.json())

app.get("/exemplo", (req,res) =>{
    res.send("Endpoint executado");
})

app.post("/:nome",(req,res)=>{
    // Imprime a rota deste endpoint, ip e o navegador.
    console.log(`A rota ${req.url}
    foi acessada pelo IP ${req.ip}
    usando o navegador ${req.get("User-agent")}!`);
    // Body só gera resultado se body-parser for usado como middleware
    const data = req.body;
    // Lê valor do path param definirdo na URL
    const nome = req.params.nome;
    // Verifica se o client aceita tipos de texto e retorna um valor Truthy para
    if(req.accepts("text")){
    // Define o status HTTP da resposta
    res.type("text");
    // Define o status HTTP da resposta
    res.status(200);
    // Configura retorno de cookie com prazo de expiração
    res.cookie("nome", "IFSP", {expires: new Date(Date.now() + 10000)});
    // Define o status HTTP da resposta
    res.send({
        nome: nome,
        data: data,
        });
} else{
    // Se o client não aceita text, configura
    // status - 406 Not Acceptable
     res.status(406);
     res.end();
 }

 const middlewareLog = (req, res, next) => {
    console.log("-->Middleware de Log<--");
    console.log(req.url);
    console.log(req.get("User-Agent"));
    console.log(req.ip);
    next(); //passa o controle para o próximo middleware ou handler
   }
   // Adicionando o middleware ao aplicativo express
   app.use(middlewareLog);
   // Quando este endpoint for acessado, o middleware será executado antes
   app.get('/', function (req, res, next) {
    res.send('Dado retornado');
   });
   app.listen(port, function() {
    console.log(`Exemplo de app aguardando na porta ${port}!`)
   });
})


app.listen(port,()=>{
    console.log("servidor iniciado...");
})