class Usuario{
    constructor(){
        this.nombre = "";
        this.apellido = "";
        this.edad = 0;
    }

    setNombre(nombre){
        this.nombre = nombre;
        return this;
    }

    setApellido(apellido){
        this.apellido = apellido;
        return this;        
    }

    setEdad(edad){
        this.edad = edad;
        return this;
    }

    build(){
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad
        }
    }
}

module.exports = Usuario;