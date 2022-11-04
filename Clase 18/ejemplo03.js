const empleados=[
    {
    nombre:'Flavia', trabajo:'desarrollador'
},
{
    nombre:'Mariana', trabajo:'ingeniera'
},
{
    nombre:'Pablo', trabajo:'abogado'
},
{
    nombre:'Lucas', trabajo:'maestro'
},
{
    nombre:'Maria', trabajo:'desarrollador'
},
{
    nombre:'Agustin', trabajo:'desarrollador'
}]
const desarrollador= empleados.filter(
    empleado=> empleado.trabajo=='desarrollador'
)
console.log(desarrollador);

const nodesarrollador= empleados.filter(
    empleado=> empleado.trabajo!=='desarrollador'
)
console.log(nodesarrollador)
