```
const myObject = {hello: 'world'}
console.log(myObject)

const clonedMyObject = {...myObject}
console.log(clonedMyObject)

myObject.hello = 'mars'
console.log(myObject)
console.log(clonedMyObject)

console.log({...myObject, hi: 'pluto'})


console.log({...myObject, hello: 'pluto'})

console.log({hello: 'pluto', ...myObject})

const myArray = [1,2,3]
console.log(myArray)
console.log([0, ...myArray, 4])
```
