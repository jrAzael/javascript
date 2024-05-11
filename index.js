const express = require("express")
const cors = require("cors")

const app= express()
const PORT= 3000;


app.use(cors())
app.use(express.json())
app.listen(PORT, ()=>{
    console.log(`Servidor creado en http://localhost:${PORT}`)
})


let listTask= []
app.get('/listTask', (req, res)=>{
    console.log('Tareas: ', listTask)
    if(listTask.length === 0){
        return res.json({message: 'No hay tareas'})
    }
    res.json(listTask)
})


app.post('/addTask', (req, res)=>{
    const {task,id}= req.body
    console.log(task,id)
    
    if(!task){
        res.status(400).json({message: 'No se ha enviado la tarea'})
    }

    listTask= [...listTask, {task,id}]
    console.log(listTask)
    res.json({message: 'Tarea agregada', tarea: task, id: id})
});
app.delete('/deleteTask', (req, res)=>{
    listTask= []
    res.json({message: 'Tareas eliminadas'})
});
//editar tarea  
app.put('/editTask/:id', (req, res)=>{
    const {id}= req.params
    const {task}= req.body
    console.log(id, task)
    listTask= listTask.map((tarea)=>{
        if(tarea.id === id){
            tarea.task= task
        }
        return tarea
    })
    res.json({message: 'Tarea actualizada'})
    alert('Tarea actualizada')
});