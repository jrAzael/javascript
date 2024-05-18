const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const Connection = require("mysql/lib/Connection");

const app = express(); // creamos la instancia express


//middlewares 
app.use(express.json());
app.use(cors()); // intercomunicar tecnologias 

///iniciamos el servidor
const PORT = 3000;
z
app.listen(PORT, ()=>{
    console.log(`servidor creado en el puerto ${PORT}`)
})
const conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "cuilmas23F",
    port:3306,
    database: "topicos"
});

conexion.connect((err)=>{
    if(err){
        console.error(err.message || "no se puede conectar a la base de datos");
    }else{ 
        console.log("conectado a la base de datos")
    }

});

app.get("/listTask",(req,res)=>{
    conexion.query("SELECT * FROM usuarios",(error,results)=>{
        if(error) res.status(500).json({message: error.message || "no se pueden obtener datos en este momento para la tabla usuarios "});
        else res.status(200).json(results);
    });
});
//agregar usuario
app.post("/addNom",(req,res)=>{
    const {nombre} = req.body;
    conexion.query('INSERT INTO usuarios(nombre) VALUES("'+nombre+'")',(error,results)=>{
        if (error) res.status(500).json({message:error.message || "no se pudo agregar en este momento"});
        else res.json(results);
    });
});


app.patch("/EditNom",(req,res)=>{
const {id,nombre} = req.body;
conexion.query('UPDATE usuarios SET nombre="'+nombre+'" WHERE id='+id,(error,results)=>{
    if (error) res.status(500).json({message:error.message || "no se pudo actualizar en este momento"});
        else res.json(results);
    });
});
//eliminar
app.delete("/",(req,res)=>{
    const {id} =req.body;
    conexion.query('DELETE FROM usuarios WHERE id='+id,(error,results)=>{
        if (error) res.status(500).json({message:error.message || "no se pudo eliminar en este momento"});
        else res.json(results);
    })

})