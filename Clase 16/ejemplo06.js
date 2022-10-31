const alternar= document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click',function(e){

    e.currentTarget.classList.toggle('activo');
})



//ClassList representa una lsta de clases asignadas al elemento.. toggle cambiar una clase