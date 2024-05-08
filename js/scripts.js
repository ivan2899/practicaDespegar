/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

///////////////keylogger de tipo software ////////////////




//TIPO 1



const  btnS= document.getElementById("btn-S")
/* styles btnS4 */
btnS.style.fontSize="120%"

const pS=document.getElementById("p-S")
/* styles ps */
pS.style.display="none"
pS.style.color="white"
pS.style.fontSize="110%"

const textoBoton= document.getElementById("b")
textoBoton.style.color="white"

function mostrarData(){
    pS.style.display="block";
    btnS.setAttribute("onclick","ocultarData()");
    btnS.textContent= "(ocultar) Tipo 1: Keylogger de Kernel";


}

function ocultarData(){
    pS.style.display="none";
    btnS.setAttribute("onclick","mostrarData()");
    btnS.textContent=" Tipo 1: Keylogger de Kernel"


}


//TIPO 2
const  btnS2= document.getElementById("btn-S2")
/* styles btnS2 */
btnS2.style.fontSize="120%"

const pS2=document.getElementById("p-S2")
/* styles ps2 */
pS2.style.display="none"
pS2.style.color="white"
pS2.style.fontSize="110%"

const textoBoton2= document.getElementById("b2")
textoBoton2.style.color="white"

function mostrarData2(){
    pS2.style.display="block";
    btnS2.setAttribute("onclick","ocultarData2()");
    btnS2.textContent= "(ocultar)  Tipo 2: Keylogger de API"

}

function ocultarData2(){
    pS2.style.display="none";
    btnS2.setAttribute("onclick","mostrarData2()");
    btnS2.textContent="  Tipo 2: Keylogger de API"


}

//TIPO 3

const  btnS3= document.getElementById("btn-S3")
/* styles btnS3 */
btnS3.style.fontSize="120%"

const pS3=document.getElementById("p-S3")
/* styles ps3 */
pS3.style.display="none"
pS3.style.color="white"
pS3.style.fontSize="110%"

const textoBoton3= document.getElementById("b3")
textoBoton3.style.color="white"

function mostrarData3(){
    pS3.style.display="block";
    btnS3.setAttribute("onclick","ocultarData3()");
    btnS3.textContent= "(ocultar) Tipo 3: Keylogger de JavaScript"

}

function ocultarData3(){
    pS3.style.display="none";
    btnS3.setAttribute("onclick","mostrarData3()");
    btnS3.textContent=" Tipo 3: Keylogger de JavaScript"


}

//TIPO 4
const  btnS4= document.getElementById("btn-S4")
/* styles btnS4 */
btnS4.style.fontSize="120%"


const pS4=document.getElementById("p-S4")
/* style pS4 */
pS4.style.display="none"
pS4.style.color="white"
pS4.style.fontSize="110%"

const textoBoton4= document.getElementById("b4")
textoBoton4.style.color="white"

function mostrarData4(){
    pS4.style.display="block";
    btnS4.setAttribute("onclick","ocultarData4()");
    btnS4.textContent= "(ocultar) Tipo 4: Keylogger de Inyección de Memoria"

}

function ocultarData4(){
    pS4.style.display="none";
    btnS4.setAttribute("onclick","mostrarData4()");
    btnS4.textContent=" Tipo 4: Keylogger de Inyección de Memoria"


}

const padreS= document.getElementById("padre-S");
padreS.style.display="flex"
padreS.style.flexDirection="column"


















/* FORMAS DE DETECTAR EL KEYLOGGER */
//revisar el administrador de tareas
const divPadre= document.getElementById("divpadre")

/* style divpadre */
divPadre.style.display="flex";
divPadre.style.flexDirection="column"

const botonK= document.getElementById("boton-k");
botonK.textContent="Revisar el Administrador de Tareas";
divPadre.appendChild(botonK);
/* style blokK */

 botonK.style.fontFamily="sansserif";
    botonK.style.fontSize="130%"
    botonK.style.backgroundColor="grey"

const parrafo= document.getElementById("p-k");
parrafo.textContent="Al revisar el Administrador de tareas vas a tener que fijarte que no haya ningún proceso sospechoso ni procesos de windows duplicados, en caso de encontrar alguno, debes buscarlo en google para verificar si no es un software malicioso."
divPadre.appendChild(parrafo);
parrafo.style.display="none";
parrafo.style.color='white';
parrafo.style.fontFamily="sansserif"



function mostrarInfo(){
    parrafo.style.display="block";
    botonK.setAttribute("onclick","ocultarInfo()");
    botonK.textContent= "(Ocultar) Revisar el Administrador de Tareas"
    botonK.style.border="2px solid white"
    botonK.style.backgroundColor="orangered"
    botonK.style.color="white"
    botonK.style.borderRadius="10px"
   
};
 
function ocultarInfo(){
    parrafo.style.display="none";
    botonK.setAttribute("onclick","mostrarInfo()");
    botonK.textContent="Revisar el Administrador de Tareas"
    botonK.style.border="2px solid black"
    botonK.style.borderRadius="0px"
    botonK.style.backgroundColor="grey"
    botonK.style.color="black"
};

//instalar antivirus

const botonK2= document.getElementById("boton-k2");
botonK2.textContent="Instalar un Antivirus";
divPadre.appendChild(botonK2);
botonK2.style.fontFamily="sansserif";
botonK2.style.fontSize="130%"
botonK2.style.backgroundColor="grey"

const parrafo2= document.getElementById("p-k2");
parrafo2.textContent='Otra opcion es Instalar un Antivirus y realizar analisis competo de tu PC para detectar posibles amenazas (aunque los keylogger estan diseñados para que no los detecte).';
divPadre.appendChild(parrafo2);
parrafo2.style.display="none";
parrafo2.style.color='white';
parrafo2.style.fontFamily="sansserif"

function mostrarInfo2(){
    parrafo2.style.display="block";
    botonK2.setAttribute("onclick","ocultarInfo2()");
    botonK2.textContent= "(Ocultar) Instalar un Antivirus"
    botonK2.style.border="2px solid white"
    botonK2.style.backgroundColor="orangered"
    botonK2.style.color="white"
    botonK2.style.borderRadius="10px"
};
 
function ocultarInfo2(){
    parrafo2.style.display="none";
    botonK2.setAttribute("onclick","mostrarInfo2()");
    botonK2.textContent=" Instalar un Antivirus"
    botonK2.style.border="2px solid black"
    botonK2.style.borderRadius="0px"
    botonK2.style.backgroundColor="grey"
    botonK2.style.color="black"
};

//Usar comando netstat -b

const botonK3= document.getElementById("boton-k3");
botonK3.textContent="Usar comando netstat -b ";
divPadre.appendChild(botonK3);
botonK3.style.fontFamily="sansserif";
botonK3.style.fontSize="130%"
botonK3.style.backgroundColor="grey"


const parrafo3= document.getElementById("p-k3");
parrafo3.textContent='Si elegis usar el comando netstat -b en las líneas de comando de windows vas a poder ver todas las conexiones del equipo, y en caso de ver algo raro, tendrás que buscar que lo provoca y eliminarlo.';
divPadre.appendChild(parrafo3);
parrafo3.style.display="none";
parrafo3.style.color='white';
parrafo3.style.fontFamily="sansserif"



function mostrarInfo3(){
    parrafo3.style.display="block";
    botonK3.setAttribute("onclick","ocultarInfo3()");
    botonK3.textContent= "(Ocultar) Usar comando   netstat -b  "
    botonK3.style.border="2px solid white"
    botonK3.style.backgroundColor="orangered"
    botonK3.style.color="white"
    botonK3.style.borderRadius="10px"
};
 
function ocultarInfo3(){
    parrafo3.style.display="none";
    botonK3.setAttribute("onclick","mostrarInfo3()");
    botonK3.textContent=" Usar comando   netstat -b "
    botonK3.style.border="2px solid black"
    botonK3.style.borderRadius="0px"
    botonK3.style.backgroundColor="grey"
    botonK3.style.color="black"
};

//formatear por completo el equipo

const botonK4= document.getElementById("boton-k4");
botonK4.textContent="Formatear por completo del equipo";
divPadre.appendChild(botonK4);
botonK4.style.fontFamily="sansserif";
botonK4.style.fontSize="130%"
botonK4.style.backgroundColor="grey"


const parrafo4= document.getElementById("p-k4");
parrafo4.textContent=' La ultima y más efectiva es Formatear por completo el equipo, lo malo es que podes perder todo lo que tenes guardado en el pc si no haces copias de seguridad antes de realizarla  .';
divPadre.appendChild(parrafo4);
parrafo4.style.display="none";
parrafo4.style.color='white';
parrafo4.style.fontFamily="sansserif"



function mostrarInfo4(){
    parrafo4.style.display="block";
    botonK4.setAttribute("onclick","ocultarInfo4()");
    botonK4.textContent= "(Ocultar) Formatear por completo del equipo "
    botonK4.style.border="2px solid white"
    botonK4.style.backgroundColor="orangered"
    botonK4.style.color="white"
    botonK4.style.borderRadius="10px"
};
 
function ocultarInfo4(){
    parrafo4.style.display="none";
    botonK4.setAttribute("onclick","mostrarInfo4()");
    botonK4.textContent="  Formatear por completo del equipo"
    botonK4.style.border="2px solid black"
    botonK4.style.borderRadius="0px"
    botonK4.style.backgroundColor="grey"
    botonK4.style.color="black"
};


const parrafFdk= document.getElementById ("p-fdk");
parrafFdk.textContent="(clickea para ver más info)"
parrafFdk.style.color="white"












