const frutas= ['palta', 'naranjas', 'manzanas', 'anana', 'bananas'];

console.log(frutas);

console.log(frutas.sort());


const numeros=[78, 10, 7, 1, 2];

console.log(numeros);
console.log(numeros.sort())//unicode, el array es ordenado atendiendo a la posicion del unicode (en US) DE CADA CARACTER,R, segun la conversiona  string de cada 

const num= numeros.sort(function(a,b){
    return a-b;
})

console.log(num);
const num2= numeros.sort(function(a,b){
    return b-a;
})
console.log(num2)

const palabras=['flavia', 'abeja', 'perro', 'animal','pablo'];

console.log(palabras.sort().reverse()); //posible solucion

const palabrs= palabras.sort(function(b,a){
    if(b>a) return -1;
    return 0;
    

})
console.log(palabrs)