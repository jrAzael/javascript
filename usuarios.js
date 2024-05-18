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
//agregar nombre
const formAdd= document.getElementById('formAdd');
formAdd.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const nombre= document.getElementById('nombre').value;
    const URLtoAddNom= 'http://localhost:3000/addNom';
    const awaitAddNom= await fetch(URLtoAddNom, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({task: nombre})
    });
    const addNom= await awaitAddNom.json();
    console.log(addNom);
    await actualizardata(e);
});
//editar nombre
const formEdit= document.getElementById('formEdit');
formEdit.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const id= document.getElementById('id').value;
    const nombre= document.getElementById('nombre').value;
    const URLtoEditNom= 'http://localhost:3000/EditNom';
    const awaitEditNom= await fetch(URLtoEditNom, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, task: nombre})
    });
    const editNom= await awaitEditNom.json();
    console.log(editNom);
    await actualizardata(e);
});

