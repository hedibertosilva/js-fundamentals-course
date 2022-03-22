// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839

// String Convertions

String(123) // explicitly
123 + '' // implicitly


String(123) // '123'
String(-12.3) // '-12.3'
String(null) // 'null'
String(undefined) // 'undefined'
String(true) // 'true'
String(false) // 'false'

// Boolean Convertions

Boolean(1) // explicit // true
if (2) { console.log('accepted') } else { console.log('rejected') } // implicity // accepted
if (0) { console.log('accepted') } else { console.log('rejected') } // rejected
if (-2) { console.log('accepted') } else { console.log('rejected') } // accepted
if (0.2) { console.log('accepted') } else { console.log('rejected') } // accepted
!! 2 // true
!! 0 // false
!! '0' // true
!! 'hello' // true
!!  '' // false
!! null // false
!! undefined // false
!![] // true
!!{} // true
2 || 'hello' // 2 // true // returns 2 'cause it checks if the first can be returned true
2 && 'hello' // 'hello' // true // returns 'hello' 'cause it checks if first can be return false

// convertion returns false when it's a number 0, null, undefined or empty string.

Boolean('')           // false
Boolean(0)            // false
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false

// truthy values

Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true

// number convertions

Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
