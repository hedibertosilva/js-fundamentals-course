
const arr1 = [1, 2, 3, 4, 5]

function multiply(arr, n=arr.length) {
  if (n <= 0) {
    return 1
  }
  return arr[n-1] * multiply(arr, n-1)
}

const product = multiply(arr1)

console.log(product)

