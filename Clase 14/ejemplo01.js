const num1= parseInt(prompt('Ingrese su primer numero',''));
const num2= parseInt(prompt('Ingrese su segundo numero',''));
const num3= parseInt(prompt('Ingrese su tercer numero',''));
if(num1>num2  && num1>num3){
    document.write(`el numero mayor es ${num1}`)
} else if(num2>num3){
    document.write(`el numero mayor es ${num2}`)
} else{
    document.write(`el numero mayor es el ${num3}`)
}