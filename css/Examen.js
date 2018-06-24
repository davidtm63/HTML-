var nom=document.getElementById('nombre');
var dia=document.getElementById('dedo');

function funcion(){
        var newDiv=document.createElement('div');
        var position=document.getElementById('caca');
        newDiv.innerHTML=nom.value+' '+dia.value;
        position.appendChild(newDiv);
        
        if (nom.value==""){
            nom.className='borde';
            nom.value='!NECESARIO!';
        }
        if(dia.value==""){
            dia.className='borde';
            dia.value='!NECESARIO!';
            
        }
        if (nom.value=='Puta'||'Gilipollas'){
            gritar();
            var y=document.getElementById('no');
            var z=document.createElement('h2');
            z.innerHTML='!!!!ESO ES INAPROPIADO!!!!';
            y.appendChild(z);
        }
}
function borrar(){
    nom.value='';
    dia.value='';
    nom.className='';  
    dia.className='';
}
function gritar(){
    var x=document.getElementById('gritar');
    var newTd=document.createElement('td');
    newTd.colSpan='5';
    newTd.className='rojo';
    x.appendChild(newTd);
}

