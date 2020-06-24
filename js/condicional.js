// condicional
/*
&& AND || OR 
< MENOR QUE 
> MAYOR QUE
<= MENOR O IGUAL
>= MAYOR O IGUAL
!= DISTINTO
== IGUAL

*/
//IF
var a=10;
if (a>5) {
    console.log(" Si es Mayor");
}

//IF-ELSE
var a=3;
if (a>5) {
    console.log(" Si es Mayor");
}
else{
    console.log(" Es menor");
}

//ELSE -IF
var a=12;
var b=20;
if (a>b) {
    console.log(`${a} es mayor que ${b}`); 
}
else if(a==b){
    console.log(`${a} es igual que ${b}`);
}
else{
    console.log(`${a} es menor que ${b}`); 
}

// operaciones lógicas
//and
var x=true;
var y=false;
console.log(x && y);

//or
var x=true;
var y=false;
console.log(x || y);
// ejemplo
var a=4;
var b=8;
var c=6;

if ((a < b) &&(a<c)) {
    console.log(" a es la menor");
}

//SWITCH

let curso = "javascript";

switch (curso) {
    case "java":
        console.log("java");
        break;
    case "python":
        console.log("python");
        break;
    case "javascript":
        console.log("javascript");
        break;
    default:
        break;
}