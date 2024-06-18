// !== != == === 
// === 
// =>


// Selecciona el botón con el ID "inputNum" y lo almacena en la variable btnInput
const btnInput = document.getElementById("inputNum");
// Agrega un evento de clic al botón btnInput, llamará a la función inputDatos cuando se haga clic.
btnInput.addEventListener("click", inputDatos);
//Declara una variable a como un array vacío, que se utilizará para almacenar la lista de números
let a = [];

function inputDatos() {
   // los numeros que se ingresan para ordenar
    const numero = document.getElementById("addNum").value;
   // Se obtiene cantidad de datos a almacenar y se almacena en la variable n
    const n = document.getElementById("cantidadDatos").value;
    const listOriginal = document.getElementById("listOrigin");
    const listOri= document.getElementById("listaOri");
    // convertimos el dato a int y lo guardamos en una nueva variable
    const num= parseInt(numero);
    // aqui se valora que el dato no sea nulo, que si sea un valor numerico y si es menor que cero
    if (num == null || num === "" || isNaN(num) || num < 0) {
        //nos mandara un mensaje en rojo que dira lo siguiente
        listOri.innerHTML = "No hay datos";
        listOri.style.color = "red";
        listOri.style.display = "block";
    } else {
        //en caso de que no, es que el dato es correcto
        listOri.style.color = "black";
        listOri.innerHTML = "Lista Original: ";
        // se ejecuta mientras sea menor que n
        if (a.length < n) { 
            //se agrega el numero "num" a "a" 
            a.push(num);
            // para actualizar el contenido
            listOriginal.innerHTML = a;
           // Aseguran que ambos elementos de lista sean visibles estableciendo sus propiedades de visualización en "block"
            listOri.style.display = "block";
            listOriginal.style.display = "block";
        } else {
            //si la cantidad es mayor a la deseada nos oculta el boton
            btnInput.style.display = "none";
        }
    }
}






//Se define una función llamada orderInter que toma un array a como argumento
function orderInter(a){
  //  Se registra el tiempo actual antes de comenzar el proceso de ordenación.
    let inicio= Date.now();
    //Inicia un bucle que recorre el array a desde el principio hasta el final.
    for(let i=0; i<a.length;i= i+1){
       // Inicia un bucle interno que recorre el array desde la posición siguiente a i hasta el final.
        for(let j=i+1; j<a.length; j=j+1){
            // comprueba el arreglo
            if(a[i]>a[j]){
                // Intercambia los elementos en las posiciones i y j para ordenarlos.
                let aux= a[i];
                a[i]= a[j];
                a[j]= aux;
            }
        }
    }
    //Registra el tiempo después de que se ha completado el proceso de ordenación. 
    let fin= Date.now();
    let tiempo= fin-inicio;
    // retorna el arreglo a ordenado y el tiempo que se tardo en ordenar
    return [a, tiempo];
}

function ordenBurbuja(a){
    let inicio= Date.now();
    for (let i = 0; i < a.length; i = i + 1) {
        // Bucle interno: compara y ordena elementos en pares
        for (let j = 0; j < a.length - i - 1; j = j + 1) {
            // Compara elementos adyacentes y realiza un intercambio si es necesario
            if (a[j] > a[j + 1]) {
                let aux = a[j];
                a[j] = a[j + 1];
                a[j + 1] = aux;
            }
        }
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    return [a, tiempo];
}

function ordenInsercion(a){
    let inicio= Date.now();
    for(let i=1; i<a.length; i= i+1){
        let aux= a[i];
        let j= i-1;
        // Inicia un bucle while que se ejecutará mientras j sea mayor o igual a 0
        // y el valor en la posición j sea mayor que aux
        while(j>=0 && a[j]>aux){
            //Desplaza los elementos mayores que aux hacia la derecha para dejar espacio para la inserción.
            a[j+1]= a[j];
            //Decrementa j para seguir comparando con elementos anteriores en el array.
            j= j-1;
        }
        //Inserta el valor almacenado en aux en la posición correcta del array ordenado.
        a[j+1]= aux;
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    return [a, tiempo];
}

function ordenQuickSort(a){
    let inicio= Date.now();
    if(a.length<=1){
        return a;
    }
    const pivote= a[0];
    const izq= [];
    const der= [];
    // ciclo para recorrer el arreglo
    for(let i=1; i<a.length; i++){
        if(a[i]<pivote){
            izq.push(a[i]);
        }else{
            der.push(a[i]);
        }
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    // en la siguiente linea lo que se realiza es juntar, la parte izquierda
    // despues de esto el pivote y al final la parte derecha 
    return ordenQuickSort(izq).concat(pivote,ordenQuickSort(der));
}
function ordenShellSort(a){
    let inicio= Date.now();
    let incremento= a.length/2;
    while(incremento>0){
        for(let i=incremento; i<a.length; i=i+1){
            let j= i;
            let temp= a[i];
            while(j>=incremento && a[j-incremento]>temp){
                a[j]= a[j-incremento];
                j= j-incremento;
            }
            a[j]= temp;
        }
        if(incremento==2){
            incremento=1;
        }else{
            incremento= parseInt(incremento*5/11);
        }
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    return [a, tiempo];
}

function orderInterR(a){
    let inicio= Date.now();
    for(let i=0; i<a.length;i= i+1){
        for(let j=i+1; j<a.length; j=j+1){
            if(a[i]<a[j]){
                let aux= a[i];
                a[i]= a[j];
                a[j]= aux;
            }
        }
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    return [a, tiempo];
}

function ordenBurbujaR(a){
    let inicio= Date.now();
    for (let i = 0; i < a.length; i = i + 1) {
        for (let j = 0; j < a.length - i - 1; j = j + 1) {
            if (a[j] < a[j + 1]) {
                let aux = a[j];
                a[j] = a[j + 1];
                a[j + 1] = aux;
            }
        }
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    return [a, tiempo];
}

function ordenInsercionR(a){
    let inicio= Date.now();
    for(let i=1; i<a.length; i= i+1){
        let aux= a[i];
        let j= i-1;
        while(j>=0 && a[j]<aux){
            a[j+1]= a[j];
            j= j-1;
        }
        a[j+1]= aux;
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    return [a, tiempo];
}

function ordenQuickSortR(a){
    if(a.length<=1){
        return a;
    }
    const pivote= a[0];
    const izq= [];
    const der= [];
    for(let i=1; i<a.length; i++){
        if(a[i]>pivote){
            izq.push(a[i]);
        }else{
            der.push(a[i]);
        }
    }
    
    return ordenQuickSortR(izq).concat(pivote,ordenQuickSortR(der));

}
function ordenShellSortR(a){
    let inicio= Date.now();
    let incremento= a.length/2;
    while(incremento>0){
        for(let i=incremento; i<a.length; i=i+1){
            let j= i;
            let temp= a[i];
            while(j>=incremento && a[j-incremento]<temp){
                a[j]= a[j-incremento];
                j= j-incremento;
            }
            a[j]= temp;
        }
        if(incremento==2){
            incremento=1;
        }else{
            incremento= parseInt(incremento*5/11);
        }
    }
    let fin= Date.now();
    let tiempo= fin-inicio;
    return [a, tiempo];
}


function ordenMezclaDirecta(a) {
     // Verifica si el array es de tamaño 1 o menor, en cuyo caso ya está ordenado
    if (a.length <= 1) {
        return a;
    }
     // Calcula la mitad del array
    const mitad = Math.floor(a.length / 2);
     // Divide el array en dos partes: izquierda y derecha
    const izq = a.slice(0, mitad);
    //el punto slice es para extraer en un nuevo array
    const der = a.slice(mitad);
    //merge sera el encargado de 
    return merge(ordenMezclaDirecta(izq), ordenMezclaDirecta(der));
}

function merge(izq, der) {
    // Inicializa un array vacío para almacenar el resultado combinado
    let resultado = [];
    // Inicializa índices para recorrer las partes izquierda (izq) y derecha (der)
    let i = 0;
    let j = 0;
// Compara los elementos de las partes izquierda y derecha y combina en orden
    while (i < izq.length && j < der.length) {
        if (izq[i] < der[j]) {
            resultado.push(izq[i]);
            i++;
        } else {
            resultado.push(der[j]);
            j++;
        }
    }
   //junta ambos arreglos el de i y el de j, izquierda y derecha
    return resultado.concat(izq.slice(i)).concat(der.slice(j));
}
function ordenMezclaNatural(a){
    let izq=0;
    let der= a.length-1;
    let cambio= false;
    let aux;
    //Realiza el proceso de ordenación hasta que no haya intercambios en una pasada completa
    do{
        cambio= false;
        //Recorre el array de izquierda a derecha
        for(let i=izq; i<der; i++){
            // Compara elementos consecutivos y realiza intercambio si es necesario
            if(a[i]>a[i+1]){
                aux= a[i];
                a[i]= a[i+1];
                a[i+1]= aux;
                cambio= true;
            }
        }
        //Disminuye el límite derecho para reducir el alcance del próximo bucle de vuelta.
        der= der-1;
        // recorre el bucle de derecha a izquierda 
        for(let i=der; i>izq; i--){
            if(a[i-1]>a[i]){
                aux= a[i];
                a[i]= a[i-1];
                a[i-1]= aux;
                cambio= true;
            }
        }
        izq= izq+1;
        //  continúa mientras haya habido algún intercambio en la pasada anterior.
        // en caso de que no, termina el ciclo 
    }while(cambio);
    return a;
}

function ordenMezclaDirectaR(a) {
    if (a.length <= 1) {
        return a;
    }
    const mitad = Math.floor(a.length / 2);
    const izq = a.slice(0, mitad);
    const der = a.slice(mitad);
    return mergeR(ordenMezclaDirectaR(izq), ordenMezclaDirectaR(der));
}

function mergeR(izq, der) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < izq.length && j < der.length) {
        if (izq[i] > der[j]) {
            resultado.push(izq[i]);
            i++;
        } else {
            resultado.push(der[j]);
            j++;
        }
    }

    return resultado.concat(izq.slice(i)).concat(der.slice(j));
}
function ordenMezclaNaturalR(a){
    let izq=0;
    let der= a.length-1;
    let cambio= false;
    let aux;
    do{
        cambio= false;
        for(let i=izq; i<der; i++){
            if(a[i]<a[i+1]){
                aux= a[i];
                a[i]= a[i+1];
                a[i+1]= aux;
                cambio= true;
            }
        }
        der= der-1;
        for(let i=der; i>izq; i--){
            if(a[i-1]<a[i]){
                aux= a[i];
                a[i]= a[i-1];
                a[i-1]= aux;
                cambio= true;
            }
        }
        izq= izq+1;
    }while(cambio);
    return a;
}
const ordenarBySelect = document.getElementById("ordenarBy");
const selectedOrderBy = ordenarBySelect.value;

const orderOptionSelect = document.getElementById("orderOption");
const selectedOrderOption = orderOptionSelect.value;
// de menor a mayor
const orderby= ( selectedOrderOption) =>{
    switch (selectedOrderOption) {
        case "intercambio":
        var [list, tiempo] = orderInter(a);
            imprimir(list, tiempo)
            break;
        case "borbuja":
            var [list, tiempo] = ordenBurbuja(a);
            imprimir(list, tiempo)
            break;
        case "insercion":
            var [list, tiempo] = ordenInsercion(a);
            imprimir(list, tiempo)
            break;
        case "quicksort":
            var list = ordenQuickSort(a);
            imprimir(list, 0)
            break;
        case "shellsort":
            var [list, tiempo] = ordenShellSort(a);
            imprimir(list, tiempo)
            break;
        case "mezclaDirecta":
            var list = ordenMezclaDirecta(a);
            imprimir(list, 0)
            break;
        case "mezclaNatural":
            var list = ordenMezclaNatural(a);
            imprimir(list, 0)
            break;
    }
    return list;
}
// de mayor a menor
const orderbyR= ( selectedOrderOption) =>{
    switch (selectedOrderOption) {
        case "intercambio":
        var [list, tiempo] = orderInterR(a);
            imprimir(list, tiempo)
            break;
        case "borbuja":
            var [list, tiempo] = ordenBurbujaR(a);
            imprimir(list, tiempo)
            break;
        case "insercion":
            var [list, tiempo] = ordenInsercionR(a);
            imprimir(list, tiempo)
            break;
        case "quicksort":
            var list = ordenQuickSortR(a);
            imprimir(list, 0)
            break;
        case "shellsort":
            var [list, tiempo] = ordenShellSortR(a);
            imprimir(list, tiempo)
            break;
        case "mezclaDirecta":
            var list = ordenMezclaDirectaR(a);
            imprimir(list, 0)
            break;
        case "mezclaNatural":
            var list = ordenMezclaNaturalR(a);
            imprimir(list, 0)
            break;
    }
    return list;
}

const orderButton = document.getElementById("order");
orderButton.addEventListener("click", function() {
    
    const selectedOrderBy = ordenarBySelect.value;
    const selectedOrderOption = orderOptionSelect.value;
    orderby(selectedOrderOption);
    if (selectedOrderBy  === "mayMen") {
        orderbyR(selectedOrderOption)
    }
    
});
function imprimir(a, tiempo){
    //los datos que vamos a retornar
    const listOrden= document.getElementById("listaOrd");
    const listOrdenada= document.getElementById("result");
    const tiempoOrden= document.getElementById("time");
    const titulo= document.getElementById("tituloTime");
    tiempoOrden.innerHTML= '';
    listOrden.style.display= "block";
    titulo.style.display= "block";
    listOrdenada.innerHTML= a;
    tiempoOrden.innerHTML= tiempo + ' milisegundos';
    listOrdenada.style.display= "block";
}

