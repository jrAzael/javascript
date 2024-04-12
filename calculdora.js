document.addEventListener("DOMContentLoaded",()=>{
    const formulario = document.getElementById("formulario");
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");
    const contenedorMensaje = document.getElementById("mensaje");

    const eventoFormulario = async (evt)=>{
        evt.preventDefault();
        let numero1 =numero1Input.value;
        let numero2 =numero2Input.value;

        const respuesta = await fetch(`http://localhost:3000/sumar/${numero1.trim()}/${numero2.trim()}`)
        const texto = await respuesta.text();

        console.log(respuesta);
        var alerta;
        if (respuesta.status == 500){
            alerta = `<div class="alert error">
            ${texto}
            </div>`;
        }else{
            alerta = `<div class="alert success">
            ${texto}
            </div>`;
        }
        contenedorMensaje.innerHTML = alerta;

    };
    formulario.addEventListener("submit",eventoFormulario);

});