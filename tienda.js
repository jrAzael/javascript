document.addEventListener("DOMContentLoaded", ()=>{
    async function Products(){
        const urlGetProductos= "http://localhost:3000/productos"
        const productsGET= await fetch(urlGetProductos);
        const products = await productsGET.json();
        return products.productos
    }

const productos= document.getElementById('productos');
    async function insertarDatos(){

        const products= await Products();
        let productosName= []
        for(let i=0; i<products.length; i++){
            productosName[i]= products[i].nombre
            const options= document.createElement("option")
            options.textContent= productosName[i]
            options.value= productosName[i]+"-"+products[i].precio
            productos.appendChild(options)
        }

        
    }
    insertarDatos()
    
    let listProducts= []
    const add= document.getElementById('add')
    add.addEventListener("click", async (e)=>{
        e.preventDefault();
        const selPro= productos.value
        const addProduct= document.getElementById('addProduct')

        const list= document.createElement("list")
        list.textContent= selPro
        addProduct.appendChild(list)
        listProducts= [selPro, ...listProducts]

    })

const comprar= document.getElementById('comprar')
comprar.addEventListener("click", async (e)=>{
    e.preventDefault()
    const mensaje= document.getElementById('mensaje')

    const lista= JSON.stringify(listProducts)

    const urlPostLista= "http://localhost:3000/compra"
    const option={
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: lista
    }

    const res= await fetch(urlPostLista, option)
    const respuesta= await res.text()
    mensaje.textContent= respuesta
    
})

})