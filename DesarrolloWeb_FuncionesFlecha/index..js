const firstFuntion = (message, callback) => {
    console.log(message + " " + callback)
   }
   
   
   const secondFuntion = (message, callback) => {
     console.log(message+ " " + callback)
   }
   
   const thirdFuntion = (message, callback) => {
     console.log(message+ " " + callback)
   }
   
   function addAllNumbersOfArray(array) {
      return array.reduce((a, b) => a + b, 0)
   }
   
   function orderAlphabetically(array) {
     return array.sort()
   }
   
   function findByName(array, name) {
     return array.find(element => element === name);
   }
   
   const arrayNombres = ['Mariana', 'Simon', 'Rosalia', 'Dora', 'Jose']
   firstFuntion('La suma de todos los numeros del arreglo es:', addAllNumbersOfArray([5,10,20,7]))
   secondFuntion('La lista de nombres ordenados alfabeticamente es:', orderAlphabetically(arrayNombres))
   thirdFuntion('El resultado de la busqueda es:' , findByName(arrayNombres, 'Simon'))