const datosUsuarios=[
{
    nombre: 'Mariana', password: 'abc1234'
},
{
    nombre: 'Nahuel', password:'batman123'
},
{
    nombre: 'Flavia', password: 'fgh45678'
},
{
    nombre: 'Franco', password: 'hij98765'
},
{
    nombre: 'Rafael', password: 'mnl65432'
}
]

const soloPassword= datosUsuarios.map(function(p){
    return p.password;
})

console.log(soloPassword);