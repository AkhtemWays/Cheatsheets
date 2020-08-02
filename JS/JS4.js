// spread operator massivi
// const russianCities = [
//     'Vladivostok', 'Kovrov', 'Moscow', 'Vladimir'
// ]
// const europeCities = [
//     'Bangladesh', 'Berlin', 'Paris'
// ]

// console.log([...russianCities, ...europeCities, 'Romania'])

// objects
const obj1 = {
    name: 'lena',
    age: 25,
    city: 'Kovrov'
}
const obj2 = {
    name: 'Nikita',
    age: 26,
    city: 'Kovrov'
}

// console.log({...obj1, ...obj2, name: 'Bohodir' })

// Rest operator применяется в параметризации функций

// function sum(a, b, ...rest) {
//     return a + b + rest.reduce((total, item) => total + item, 0)
// }
// const arr = [1, 2, 3, 4, 5]
// console.log(sum(...arr))


// Local storage

const number = 42

// console.log(localStorage.getItem('number'))
// console.log(localStorage.setItem('number', number.toString()))
// console.log(localStorage.getItem('number'))

// const object = {
//     name: 'Vladilen',
//     age: 26
// }
const one = 1;

const one_more_thing_to_notice = [1, 2, 3, 4, 5]

// localStorage.setItem('obj', JSON.stringify(object))
const raw = localStorage.getItem('obj')
const myObj = JSON.parse(raw)
console.log(myObj)