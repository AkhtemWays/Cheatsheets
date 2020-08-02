// в первую очередь при выводе аттрибута в объекте он смотрит на те что явные а потом на те что в прототипе
const person = {
    name: 'Alena',
    age: 26,
    mood: 'perfect',
    logInfo: () => console.log(`Hello ${this.name} you are ${this.age} years old`)
}

function small() {
    return 'small', 'big'
}

// и поэтому если хочу вставить это навсегда для всех я должен вставить это в прототип объекта
// Object.prototype.sayHello = function() {
//     console.log('gogo')
// }

// console.log(person.sayHello())

// аналогично с массивом

// const array = [1, 2, 3, 4, 5];
// let array2 = array.map(value => value + 1)

// console.log(array2)
Array.prototype.logNewMap = function() {
    console.log(this)
}

Array.prototype.squareMap = function() {
    const array2 = this.map(value => value * value);
    return array2
}

// let normal_array = array.squareMap();
// console.log(normal_array)

// context bind ==================

const lena = Object.create(person);
lena.name = 'Lena';
lena.age = 23;


console.log(lena.logInfo.bind(this)())

// замыкание

let func = function(n) {
        return () => {
            console.log(`I am function number ${n}`)
        }
    }
    // console.log(func.name)

// function createUrl(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// let url = createUrl('com')
// console.log(url('google'))

// реализация собственной функции bind
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }

// const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
// console.log(bind(person1, logPerson)())

// Асинхронность ========================

// Работа асинхронных функций: сначала когда проходит скрипт и находит эту функцию он закидывает ее в стек потом возможны 2 случая
// если это браузерный API в виде window.setTimeOut то он выбрасывает это из стека в очередь или евент луп и дожидается пока 
// этот API выполнит секунды потом когда он понимает что секунды прошли он обратно пробегается циклом по евент лупу и ложит их
// обратно в стек
const array = [23, 4, 5]

// PROMISE

// Наивный подход

console.log('Requesting data...')
    // setTimeout(() => {
    //     console.log('Preparing data...')

//     const data = {
//         server: 'aws',
//         port: 2000,
//         status: 'ok'
//     }
//     setTimeout(() => {
//         console.log('Data received...')

//     }, 2000)
// }, 2000)

// Случай с промисами
// путь вперед
// const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {

//             console.log('Preparing data...')
//             const data = {
//                 server: 'aws',
//                 port: 2000,
//                 status: 'ok'
//             }

//             resolve(data) // можем просто ресолвнуть, а можем передать данные сверху 
//         }, 2000)
//     })
//     // путь назад создаётся через then и promise внутри ( типо идем назад )
// promise.then(data => {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true;
//                 reject(data)
//             }, 2000)


//         })
//         // p.then(clientData => {
//         //     console.log('Data received...', clientData)
//         // })
// }).then(ClientData => {
//     ClientData.modified = true;
//     console.log('Data modified...', ClientData)
//     return ClientData
// }).then(data => {
//     console.log('Data received', data)
//     return data
// }).catch(err => {
//     console.error('Error: ', err)
// }).finally('finally')

// Promise.all

const sleep = time => {
    return new Promise((resolve, reject) => {
        console.log(`sleeping ${time} ms`)
        setTimeout(() => {
            console.log(`Done sleeping ${time} ms`)
            resolve()
        }, time)
    })
}

// промис отработает только тогда когда отработают все саб-промисы
Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('Done successfully')
})

// данный промис кончится тогда когда завершится хотя бы один из промисов
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})