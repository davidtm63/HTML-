

var num=10;
var res=1;
for(var i=1;i<=num;i++){
    res*=i;
}
function muestra(){
    alert(res);
}
function muestra2(){
    var numb=prompt('Dame un numero');
    var res2=1;
    for(var k=1;k<=numb;k++){
        res2*=k;
        
    }
    alert(res2);
}
function pedir(){
    var num1=prompt('Dame un numero');
    var num2=prompt('Dame un numero');
    var tot=num1*num2;
    var res3=1;
    for(var x=1;x<=tot;x++){
        res3*=x;
    }
    alert(res3);
}
function pedir2(){
    var num3=prompt('Dame un numero');
    var num4=prompt('Dame un numero');
    var suma=num3+num4;
    var division=num3/num4;
        if(suma>10){
            var res4=1;
            for(var a=1;a<=suma;a++){
            res4*=a;
            }
        }
        else{
            var res4=1;
            for(var b=1;b<=division;b++){
            res4*=b;
            }
        }
        alert(res4);
    }
function random(){
    var guay= Math.random();
    alert(guay);
}

   