// Ejemplo 1: Crear un objeto vacio

const myObjetc = {} // Esto es un objeto vacio
console.log("Ejemplo 1: Crear un objeto vacio")
console.log(myObjetc)

// Ejemplo 2: Crear un objeto con propiedades

const myObjetc2 = {
    name: "Pedro",
    age: 42
}
console.log("Ejemplo2 Crear un objeto con propiedades")
console.log(myObjetc2)

// Ejemplo 3: Objeto con diferentes propiedades

const myObject3 = {
    name: "jeny",
    age: 1,
    nicknames: [
        "guante",
        "peresosa",
        "fea"
    ],
    address: {
        zip_code: "79915",
        street: "alameda 1029",
        city: "elPasoTX"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])

// Ejemplo 4: Objeto con metodos

const pet = {
    name: "Tulio",
    // Esta es una funcion que se guarda como propiedad
    sayHello: function(){
        // this.name hace referencia a la propiedad del objeto
        console.log('${this.name} te saluda en espanol!')


    }
}
console.log("Ejemplo 4: Objeto con metodos")
pet.sayHello()
console.log(pet)

// Ejemplo 5: Objeto con metodos que recibe parametros

const myPet = {
    name: "woopa",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say's Hello to ${yourPet}`)
    }
}
console.log("Ejemplo 5: Objeto con metodo que recibe parametros")
myPet.sayHelloToMyPet("jeny")

const Pet = {
    name: "Woopa",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("jeny")
  


