
var nomb=document.getElementById('nombre');
var titu=document.getElementById('titulo');
var cont=document.getElementById('contenido');
var link=document.getElementById('myURL');

function fenviar(){
    if(nomb.value==''&& titu.value==''&&cont.value==''&&link.value==''){
        alert('CASILLAS VACIAS');
    }
    else{
        var newDiv=document.createElement('li');
        var position=document.getElementById('nom');
        newDiv.innerHTML=nomb.value+': '+titu.value+'- '+cont.value+' <a target="_blank" href="'+link.value+'">ENLACE</a>';
        position.appendChild(newDiv);
    }        
            fborrar();
            llenarSelect();
}

function fenviar2(){//pone la rellenado en el formulario en la primera posicion del array
    var newDiv=document.createElement('li');
    var position=document.getElementById('nom');
    var pos=document.getElementsByTagName('ol')[0];
        newDiv.innerHTML=nomb.value+': '+titu.value+'- '+cont.value+' <a target="_blank" href="'+link.value+'">ENLACE</a>';
        pos.insertBefore(newDiv, pos.childNodes[0]); 
            
        fborrar();
}

function fborrar(){
    nomb.value='';
    titu.value='';
    cont.value='';
    link.value='';
}

function borrar(){
    var i=0
    var pos=document.getElementsByTagName('li');
    for(i=pos.length-1;i>=0;i--){
        pos[i].remove();
    }
}

var n=document.getElementById('numero');
n.onchange=borrar1;

function borrar1(){ //Borrar solo un li dal array 
    var x=n.value; //x es la variable del select
    var pos=document.getElementsByTagName('li'); //array 
    pos[x-1].remove();//elimina la pos marcada en el select del array
    n.value='';
   newOp.remove();
}
var num=1;
function llenarSelect(){
    var newOp=document.createElement('option');//crea una option
    newOp.value=num;      //pone el num en el select
    newOp.textContent=num;//
    position=document.getElementById('numero');//escoge la posicion del select
    position.appendChild(newOp);
    num+=1;
}