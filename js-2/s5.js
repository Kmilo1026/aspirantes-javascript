function sum(numeros) {
    let suma =0;
    for (let i = 0; i < numeros.length; i++) {
    suma +=  numeros[i];
       numeros }
       return suma;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0


function max(numeross) {
    if (numeross===0) {
        return undefined;
    }

        let maximo = numeross [0];
        for (let i = 1; i < numeross.length; i++) {
            if (numeross [i] > maximo) {
                maximo = numeross[i];
            }
        }
return maximo;
 }
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined



function maxIndex(arr) {
    if (arr.length === 0) { // Si el arreglo está vacío
      return -1;
    } else {
      let max = arr[0];
      let maxIndex = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
          maxIndex = i;
        }
      }
      return maxIndex;
    }
  }


  console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

function join(arr) {
    if (arr.length === 0) { // Si el arreglo está vacío
      return '';
    } else {
      let result = arr[0];
      for (let i = 1; i < arr.length; i++) {
        result += ' ' + arr[i];
      }
      return result;
    }
  }

  console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""