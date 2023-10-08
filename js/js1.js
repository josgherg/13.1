const MenuP = document.getElementById('menuprincipal');
const IniciarJ = document.getElementById('iniciar');
const TerminarJ = document.getElementById('finalizar');
const HistorialP = document.getElementById('historial');
const BtnF = document.getElementsByClassName('boton1');
const Btns = document.getElementById('botones');
const ImgC= document.getElementById('ppt');
const cont = document.getElementById('contenedor');
const opc = document.getElementById('opciones');
const intro = document.getElementById('introduccion')
const BtnPiedra = document.getElementById('piedra');
const BtnPapel = document.getElementById('papel');
const BtnTijeras = document.getElementById('tijeras');
let tituloPrincipal = document.getElementById('titulo1');
let divPartidas = document.getElementById('mostrarHistorial');
const textoF = document.getElementById('textocerrar');


let play=false, repetir=false, ejecutado=false, ajugar=false;
let jugador, maquina;
let nuevoDiv, nuevoDiv2;
let ImagenP, ImagenM;
let historial = [], resultados=[];
let contador=0;

let piedra={
    nombre:'piedra',
    mata:'tijera',
    muere:'papel'
}
let papel={
    nombre: 'papel',
    mata:'piedra',
    muere:'tijera'
}
let tijeras={
    nombre: 'tijeras',
    mata:'papel',
    muere:'piedra'
}

//aleatorio
function aleatorio(){
    let num = Math.floor(Math.random()*3) +1;
    if (num==1) return piedra;
    if (num==2) return papel;
    if (num==3) return tijeras;
}
function evaluar(player,maquina){
    if (player===maquina) return true;
    else return false;
}

function setimagen(elemento, contrincante){
    elemento.style.background = "url('images/"+contrincante.nombre+".png')"; 
    elemento.style.backgroundRepeat = 'no-repeat';
    elemento.style.backgroundPosition= 'center';
    elemento.style.backgroundSize='contain';
}

function seleccion(numero){
    if (numero==1) jugador = piedra;
    if (numero==2) jugador = papel;
    if (numero==3) jugador = tijeras;
}

function comparacion(jugador,maquina){
    if(!repetir){
        if (jugador.muere==maquina.mata){
            tituloPrincipal.textContent = "HAS GANADO...";
            
       }
       else{
            tituloPrincipal.textContent = "HAS PERDIDO...";
       }
    }
    else{
        tituloPrincipal.textContent = "EMPATE, VOLVER A JUGAR...";
    }  
    if (contador<5){
        historial.push(jugador);
        historial.push(maquina);
        resultados.push(tituloPrincipal.textContent);
        contador++;
        const text=document.createElement('h3');
        text.textContent=`Jugador: ${jugador.nombre}  Vs. Máquina: ${maquina.nombre} - RESULTADO: ${tituloPrincipal.textContent}`;
        console.log(text);
        divPartidas.appendChild(text);    
    }
    else{
        historial.shift();
        historial.shift();
        historial.push(jugador);
        historial.push(maquina);
        resultados.shift();
        resultados.push(tituloPrincipal.textContent);
        contador++;
        const text=document.createElement('p');
        text.textContent=`Jugador:  ${jugador.nombre}  Vs. Máquina: ${maquina.nombre} - RESULTADO: ${tituloPrincipal.textContent}`;
        console.log(text);
        divPartidas.removeChild(divPartidas.firstElementChild);
        divPartidas.appendChild(text);
    }
    console.log(historial);
    console.log(resultados);
    HistorialP.disabled=false;
}

MenuP.addEventListener('click', ()=>{
    for(let i of BtnF) i.classList.toggle('off');
        Btns.classList.toggle('botonesoff');
});

IniciarJ.addEventListener('click', ()=>{
    if (play==false){
        ImgC.style.display='none';
        ImagenP = document.createElement('img');
        cont.appendChild(ImagenP);
    
        ImagenP.classList.add('nuevofondo');
        opc.classList.remove('off');
        opc.classList.add('botonesopciones');
        
        tituloPrincipal.textContent = "A JUGAR...";
        play=true;    
    }
});

BtnPiedra.addEventListener('click', ()=>{
    seleccion(1);
    maquina = aleatorio(); 
    if (ejecutado){
        cont.removeChild(nuevoDiv);
        cont.removeChild(nuevoDiv2);
        
    }
    intro.style.display = 'none';
    ImagenP.classList.remove('nuevofondo');
    nuevoDiv = document.createElement('div');
    cont.appendChild(nuevoDiv);
    nuevoDiv.classList.add('divnvo');
    ImagenP = document.createElement('img');
    nuevoDiv.appendChild(ImagenP);    
    ImagenP.classList.add('imgPM');
    setimagen(ImagenP, jugador);
    const titulo1= document.createElement('h4');
    titulo1.textContent = 'JUGADOR';
    nuevoDiv.appendChild(titulo1);

    nuevoDiv2 = document.createElement('div');
    cont.appendChild(nuevoDiv2);
    nuevoDiv2.classList.add('divnvo');
    ImagenM = document.createElement('img');
    nuevoDiv2.appendChild(ImagenM);
    ImagenM.classList.add('imgPM');
    setimagen(ImagenM, maquina);
    const titulo2= document.createElement('h4');
    titulo2.textContent = 'MÁQUINA';
    nuevoDiv2.appendChild(titulo2);

    ejecutado =true;
    repetir = evaluar(jugador,maquina);
    comparacion(jugador,maquina);
});

BtnPapel.addEventListener('click', ()=>{
    seleccion(2);
    maquina = aleatorio(); 
    if (ejecutado){
        cont.removeChild(nuevoDiv);
        cont.removeChild(nuevoDiv2);
        
    }
    intro.style.display = 'none';
    ImagenP.classList.remove('nuevofondo');
    nuevoDiv = document.createElement('div');
    cont.appendChild(nuevoDiv);
    nuevoDiv.classList.add('divnvo');
    ImagenP = document.createElement('img');
    nuevoDiv.appendChild(ImagenP);    
    ImagenP.classList.add('imgPM');
    setimagen(ImagenP, jugador);
    const titulo1= document.createElement('h4');
    titulo1.textContent = 'JUGADOR';
    nuevoDiv.appendChild(titulo1);

    nuevoDiv2 = document.createElement('div');
    cont.appendChild(nuevoDiv2);
    nuevoDiv2.classList.add('divnvo');
    ImagenM = document.createElement('img');
    nuevoDiv2.appendChild(ImagenM);
    ImagenM.classList.add('imgPM');
    setimagen(ImagenM, maquina);
    const titulo2= document.createElement('h4');
    titulo2.textContent = 'MÁQUINA';
    nuevoDiv2.appendChild(titulo2);

    ejecutado =true;
    repetir = evaluar(jugador,maquina);
    comparacion(jugador,maquina);
});


BtnTijeras.addEventListener('click', ()=>{
    seleccion(3);
    maquina = aleatorio(); 
    if (ejecutado){
        cont.removeChild(nuevoDiv);
        cont.removeChild(nuevoDiv2);
        
    }
    intro.style.display = 'none';
    ImagenP.classList.remove('nuevofondo');
    nuevoDiv = document.createElement('div');
    cont.appendChild(nuevoDiv);
    nuevoDiv.classList.add('divnvo');
    ImagenP = document.createElement('img');
    nuevoDiv.appendChild(ImagenP);    
    ImagenP.classList.add('imgPM');
    setimagen(ImagenP, jugador);
    const titulo1= document.createElement('h4');
    titulo1.textContent = 'JUGADOR';
    nuevoDiv.appendChild(titulo1);

    nuevoDiv2 = document.createElement('div');
    cont.appendChild(nuevoDiv2);
    nuevoDiv2.classList.add('divnvo');
    ImagenM = document.createElement('img');
    nuevoDiv2.appendChild(ImagenM);
    ImagenM.classList.add('imgPM');
    setimagen(ImagenM, maquina);
    const titulo2= document.createElement('h4');
    titulo2.textContent = 'MÁQUINA';
    nuevoDiv2.appendChild(titulo2);

    ejecutado =true;
    repetir = evaluar(jugador,maquina);
    comparacion(jugador,maquina);
});

HistorialP.addEventListener('click',()=>{
    if (ajugar){
        tituloPrincipal.textContent = "A JUGAR...";
        ajugar=false;
    }
    else{
        tituloPrincipal.textContent = "HISTORIAL DE PARTIDAS";
        ajugar=true;
    }
    
    cont.classList.toggle('off');
    cont.classList.toggle('contenedorC');
    opc.classList.toggle('off');
    opc.classList.toggle('botonesopciones');
    divPartidas.classList.toggle('off');
    divPartidas.classList.toggle('mostrarhist');

});

TerminarJ.addEventListener('click',()=>{
    tituloPrincipal.classList.add('off');
    cont.classList.remove('contenedorC');
    cont.classList.add('off');
    opc.classList.remove('botonesopciones');
    opc.classList.add('off');
    Btns.classList.add('off');
    textoF.classList.add('mostrarhist');
    divPartidas.classList.remove('mostrarhist');
    divPartidas.classList.add('off');

    setTimeout(()=>{
        window.close();
    },3000);
    
});