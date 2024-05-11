addEventListener('DOMContentLoaded', async (e) => {
    await actualizardata(e);
});

async function actualizardata(e){
    e.preventDefault();
    const tbody = document.getElementById('listTask')
    const URLtoGetTask= 'http://localhost:3000/listTask';
    const awaitTasks= await fetch(URLtoGetTask);
    const tasks= await awaitTasks.json();

    const msg= document.querySelector('#msg');
    const message= tasks.message;


    if(tasks ){

        msg.innerHTML= '';
    }
    if(tasks.message){

        msg.innerHTML= message;
    }

    tbody.innerHTML= '';


    for (let i=0; i<tasks.length; i++) {
        const tr= document.createElement('tr');
        const th= document.createElement('th');
        const td= document.createElement('td');
        th.innerHTML= tasks[i].task;
        td.innerHTML= tasks[i].id;

        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);

    }
}

const btnAddTask= document.getElementById('addTask');
btnAddTask.addEventListener('click', async (e) => {
    e.preventDefault();
    const task= document.getElementById('task').value;
    const id= document.getElementById('id').value;

    const data= {task, id};
    if(!task){
        msg.innerHTML= 'No se ha enviado la tarea';
        return;
    }
    if(!id){
        msg.innerHTML= 'No se ha enviado el id';
        return;
    }
    const URLtoAddTask= 'http://localhost:3000/addTask';
    const awaitAddTask= await fetch(URLtoAddTask, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await awaitAddTask.json();
    console.log(response);
    await actualizardata(e);
    msg.innerHTML= "Tarea agregada";
})

const deleteTask= document.getElementById('deleteTaks');
deleteTask.addEventListener('click', async (e) => {
    e.preventDefault();
    const URLDelete= 'http://localhost:3000/deleteTask';
    const DeleteTarea= await fetch(URLDelete, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await DeleteTarea.json();
    console.log(response);
    await actualizardata(e);
})
//editar tarea
const editTask= document.getElementById('editTask');
editTask.addEventListener('click', async (e) => {
    e.preventDefault();
    const id= document.getElementById('id').value;
    const task= document.getElementById('task').value;

    const data= {task, id};
    if(!task){
        msg.innerHTML= 'No se ha enviado la tarea';
        return;
    }
    if(!id){
        msg.innerHTML= 'No se ha enviado el id';
        return;
    }
    const URLEdit= `http://localhost:3000/editTask/${id}`;
    const EditTarea= await fetch(URLEdit, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await EditTarea.json();
    console.log(response);
    await actualizardata(e);
    msg.innerHTML= "Tarea actualizada";
})
//eliminar tarea por id
/*const deleteTaskId= document.getElementById('deleteTaskId');
deleteTaskId.addEventListener('click', async (e) => {
    e.preventDefault();
    const id= document.getElementById('id').value;
    const data= {id};
    if(!id){
        msg.innerHTML= 'No se ha enviado el id';
        return;
    }
    const URLDelete= `http://localhost:3000/deleteTask/${id}`;
    const DeleteTarea= await fetch(URLDelete, {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response= await DeleteTarea.json();
    console.log(response);
    await actualizardata(e);
    msg.innerHTML= "Tarea eliminada";
    
})
*/