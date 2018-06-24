var Primer = true;
var num1 = '';
var num2 = '';
var oper=0;

function Dar(numero){
    if(Primer==true){
        if (oper == -1){
            num1='';
        }

        num1+=numero;
        document.getElementById("valor_numero").value = num1;
    }
    else{
        num2+=numero;
        document.getElementById("valor_numero").value = num2;
    }
}

function opera(x){
    Primer=false;
    oper=x;
}

function calcular(){
    switch(oper){
        case 1:
            num1=parseInt(num1)+parseInt(num2);
        break;
        case 2:
            num1=parseInt(num1)-parseInt(num2);
        break;
        case 3:
            num1=parseInt(num1)* parseInt(num2);
        break;
        case 4:
            num1=parseInt (num1)/parseInt(num2);
        break;
    }
    document.getElementById("valor_numero").value = num1;
    num2='';
    Primer=true;
    oper=-1;
}

function reset(){
    num1='';
    document.getElementById("valor_numero").value = num1;
    num2='';
    document.getElementById("valor_numero").value = num2;
    oper=0;
}

function reset1(){
    
}
