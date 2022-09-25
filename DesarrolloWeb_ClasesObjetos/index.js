class Animal {
    constructor(name, typesFood, age) {
      this.name = name;
      this.typesFood = typesFood;
      this.age = age
    }
  
    getAllInformation(){
      return "El nombre del animal es " + this.name + ", sus tipos de comida son: " + this.typesFood + ", su edad es " + this.age + " años" 
    }
  }
  
  class Dog extends Animal  {
    constructor(name, typesFood, age, race)  {
      super(name, typesFood, age)
        this.race = race
    }
    
    getInformation() {
        return this.getAllInformation() + " y la raza del perro es " + this.race
    }
  }
  
  
  const dog = new Dog("Rocky", ["Croquetas", "Comida orneada", "Barf", "Pollo cocinado"], 2, "Pomerania")
  console.log(dog.getInformation())