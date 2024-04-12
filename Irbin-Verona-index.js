const CINE = document.querySelector("#Examen");

CINE.addEventListener("submit",calcularCosto);
function calcularCosto(event){
event.preventDefault();
let Personas = document.querySelector("#personas").value;
let Costo = document.querySelector("#costo").value;
let Hora = document.querySelector("#hora").value;
let Dia = document.querySelector("#selecDia").value;

let imprimiRes = document.getElementById("resultado");
imprimiRes.textContent = tda(Personas,Costo,Hora,Dia);
 }  
 const tda=(Personas,Costo,Hora,Dia)=>{
    let pre=0
    let adultos=0
    let des=0,des2=0;
    let dosx1=0
    let sub=0
    let niños=0
switch (Dia) {
 case "l":
    Personas=Personas-2
    cosPri=Costo*1.5
    subtotal=Personas*Costo
    tot=subtotal+cosPri
    if (Hora>=10 && Hora<=12){
        tot=tot*0.50
        des=tot*0.50
    }else if (Hora>12 && Hora<=18){
        tot=tot*0.75
        des2=tot*0.25
    }else if (Hora>18 && Hora<=24 && Hora<10){
       tot=tot;
    }else{
        alert("hora incorrecta")
     }

 break;
    case "mi":
        let edades=[];
         niños=0;
         adultos=0;
    for(let i=1;i<=Personas;i++){
        let edad = prompt("ingresar edad de la persona : "+i)
        edad = parseInt(edad);
        if (!isNaN(edad)){
            edades.push(edad);
            if(edad>=2 && edad<=10){
                niños=niños+1
            }
            if(edad>=60){
                adultos=adultos+1
            }

        }
    }
     f=niños+adultos
     pre=niños*Costo/2
     Personas=Personas-f
     dosx1=0;
     if(Personas>=2){
        Personas=Personas-2
        dosx1=dosx1+100;
     }
     sub=sub+Personas*Costo
     subtotal=pre+dosx1+sub
     if (Hora>=10 && Hora<=12){
        tot=subtotal*0.50
        des=subtotal*0.50
    }else if (Hora>12 && Hora<=18){
        tot=subtotal*0.75
        des2=subtotal*0.25
    }else if (Hora>18 && Hora<=24 || Hora<10){
        tot=subtotal;
     }else{
        alert("hora incorrecta")
     }
     
    break;
     case "ma" :
     case "j" :
     case "v" :
     case "s" :
     case "d" :
        subtotal=Personas*Costo
        if (Hora>=10 && Hora<=12){
            tot=subtotal*0.50
            des=subtotal*0.50
        }else if (Hora>12 && Hora<=18){
            tot=subtotal*0.75
            des2=subtotal*0.25
        }else if (Hora>18 && Hora<=24 || Hora<10){
            tot=subtotal;
         }else{
            alert("hora incorrecta")
         }
}

   return " ----------------factura---------------- "
         +"---adultos que no pagan.........."+adultos+"$:0"
         +"---descuento de niños............"+niños+"$:"+pre
         +"---descuento del 50%.............$:"+des
         +"---descuento del 25%.............$:"+des2
         +"---descuento de 2x1..............$:"+dosx1
         +"---personas sin descuento.........$:"+sub
         +"---total a pagar.................$:"+tot


}