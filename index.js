const express = require('express'); //para momtar un servidor
const cors = require('cors'); //para conectar los clientes al servidor

const app = express();

app.use(cors()); //para recibir datos de ips distintas a localhost

app.use(express.json()); //permie leer los datos JSON

app.listen(3000,()=>console.log("servidor creado en el puerto", 3000));

/**
 * GET      LEER 
 * POST     ESCRIBIR
 * PATCH    MODIFICAR UN ATRIBUTO
 * PUT      MODIFICAR EL REGISTRO
 * DELETE   ELIMINAR 
 */

app.get("/", (req, res)=>{ //obtener datos
res.send("<h1>hola desde Node</h1>");
});

app.get("/json", (req, res)=>{
    res.json({mensaje:"hola con JSON"});

}); 
app.get("/suma", (req, res)=>{
    
    const datosHTML = `
    <body>
    <input id="num1" required class="mamalon" type="number"placeholder="numero1">
    <input id="num2" required class="mamalon" type="number"placeholder="numero2">
    <button class="btn btn-success mt-3 col-9">Calcular</button>
    </body>
    `;
    res.send(datosHTML);
    var numero1=document.getElementById("num1"); ;
    var numero2=document.getElementById("num2"); ;
    try{
var numero1=parseFloat(req.params.numero1);
var numero2=parseFloat(req.params.numero2);
if (isNaN(numero1) || isNaN(numero2)){
    res.status(500).send("los datos ingresados no son validos ");

}
    }catch(error){
res.status(500).send("los datos ingresados no son validos ");
}
res.send(`la suma de ${numero1}+${numero2}=${numero1+numero2}`);
}); 

app.get("/datos/:nombre/:edad", (req, res)=>{
   var {nombre,edad} = req.params;
   const datosHTML = `
   <div>
   <h1>
   Hola ${nombre}
   <h1>
   <br />
   <p>Tu edad es: ${edad}</p>
   <div>
   `;
   res.send(datosHTML);
}); 
/*app.post();
app.patch();
app.put();
app.delete();*/
