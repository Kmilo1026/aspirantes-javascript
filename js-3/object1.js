let pedro = {

    nombre : "Pedro Perez",
    edad: 30 ,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    estatura: 18,
    saluda: function() {
        console.log ("hola, me llamo " + this.nombre)
    }

    
}

console.log (pedro.edad);
delete pedro.activo;
pedro.saluda()