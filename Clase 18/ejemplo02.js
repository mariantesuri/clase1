const alumnos=[
    {
        nombre: 'Flavia', edad: 10
    },
    {
        nombre: 'Nahuel', edad: 3
    },
    {
        nombre: 'Mariana', edad: 5
    },
    {
        nombre: 'Franco', edad: 2
    },
    {
        nombre: 'Rafael', edad: 4
    },
    {
        nombre: 'Ciro', edad: 3
    }
]

const chicos= alumnos.filter(
    alumno=> alumno.edad<=4
)
console.log(chicos)

for (let i = 0; i < chicos.length; i++) {
    document.write(`<p>Niño: ${chicos[i].nombre} cuya edad es ${chicos[i].edad}</p>`);
    
}