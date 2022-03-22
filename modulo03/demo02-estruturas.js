let salarioDoMeuAmigo = 1000
let meuSalario = "9999"
let meuSalarioErrado = "9999a"
let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoMeuAmigo + meuSalario) // 10009999

// test if meuSalario is NaN

console.log(typeof(meuSalario)) // string
console.log(isNaN(meuSalario)) // false 'cause is only digit characters
console.log(isNaN(meuSalarioErrado)) // true 'cause we can't convert the whole string in a number format


console.log(salarioDoMeuAmigo + meuSalarioCorrigido) // 10999

const arr = [1, 2, 3]
const a = Array(3)

console.log(arr)
console.log(a)
