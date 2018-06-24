var sexo=document.getElementById('sexo');
sexo.onchange=mifuncion;

function mifuncion(){
    var textosexo=document.getElementById('textosexo');
    textosexo.innerHTML=sexo.value;
}

var nomb=document.getElementById('nombre');
nomb.onblur=funcion2;

function funcion2(){
    var nombre=document.getElementById('txtnombre');
    nombre.innerHTML=nomb.value;
}

var ap=document.getElementById('apellidos');
ap.onblur=funcion3;

function funcion3(){
    var apellido=document.getElementById('txtapellido');
    apellido.innerHTML=ap.value;
}

var nacio=document.getElementById('diamesanno');
nacio.onchange=funcion4;

function funcion4(){
    var dia=document.getElementById('fecha');
    var arrfecha = nacio.value.split("-");
    dia.innerHTML=arrfecha[2]+' / '+arrfecha[1]+' / '+arrfecha[0];
    var x=2018-arrfecha[0];
        if (x<=18)
            alert('!ERES MENOR!');
}

// var d=new Date();

var corr=document.getElementById('correo');
corr.onblur=funcion5;

function funcion5(){
    var caca=document.getElementById('mail');
    caca.innerHTML=corr.value;
}

function funcion6(){
    if (nomb.value=="")
        nomb.className='rojo';
    if (ap.value=="")
        ap.className='rojo';
    if (corr.value=="")
        corr.className='rojo';
    if (sexo.value=="Selecciona")
        sexo.className='rojo';
}

