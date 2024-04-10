const contenedor =document.getElementById("root");

const obtenerDatos = async (url)=> {
    var datosApi = await fetch(url);
    var datos = await datosApi.text();

    const card = document.createElement("div");
    card.className = "card center";
    card.innerHTML = datos;

    contenedor.appendChild(card);

}

const obtenerDatosJSON = async (url)=> {
    var datosApi = await fetch(url);
    var datosMensaje = await datosApi.text();

    const card = document.createElement("div");
    card.className = "card center";
    card.innerHTML = datosMensaje;

    contenedor.appendChild(card);
}

obtenerDatos("http://localhost:3000");
obtenerDatos("http://localhost:3000/suma");
obtenerDatos("http://localhost:3000/datos/irbin/19");
obtenerDatosJSON("http://localhost:3000/json");

