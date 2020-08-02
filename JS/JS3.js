// function* numGenerator(n) {
//     for (let i = 0; i < n; i++) {
//         yield i
//     }
// }

const gen = numGenerator(10)

function iterator(n = 10) {
    let i = 0;
    return {
        next() {
            return i >= 10 ? { value: undefined, done: true } : { value: i++, done: false }
        }
    }
}

// const gen2 = iterator(10);

// for (let k of['HEllo', false, { value: true }]) {
//     console.log(k)
// }

// методы массива
// const people = [
//     { name: 'Владилен', age: 25, budget: 40000 },
//     { name: 'Igor', age: 25, budget: 3400 },
//     { name: 'Elena', age: 13, budget: 50000 },
//     { name: 'Mihail', age: 33, budget: 45000 },
//     { name: 'Victoria', age: 38, budget: 5000 }
// ]

// в forEach не нужно ничего возвращать
// people.forEach((item, index, peopleArray) => { item.name = item.name + 'a' })
// console.log(people)

// в map нужно вернуть что то для каждого элемента и как правило записать результат куда то иначе всё было в воздухе
// const people2 = people.map((item, index, peopleArray) => 'Go out')

// filter работает аналогично map только по условию
// const people3 = people.filter((item, index, peopleArray) => item.age >= 18)
// console.log(people3)

// reduce имеет сам по себе 2 параметра - коллбэк с двумя параметрами где первый тотал а второй это каждый элемент массива и второй
// параметр это начальное значение для проведения операции

// const amount = people.reduce((total, person) => total + person.budget, 0)

// find такой же как и все но он находит первый элемент совпадающий

// const elem = people.find(person => person.age === 25)
// console.log(elem)

// findIndex
// const elem = people.findIndex(person => person.age === 25)
// console.log(elem)

// Map

// const entries = [
//     ['name', 'Vladilen'],
//     ['age', 26],
//     ['job', 'fullstack']
// ]

// const map = new Map(entries)
// console.log(map.get('name'))
// console.log(map.set(NaN, 'Nan is nan').get(NaN))

// for (let [key, val] of map) {
//     console.log(key, val)
//     console.log(map.size)
// }

// map.forEach((val, key, mapObjectItself) => {
//     console.log(key, val)
// })

// ============================

// запросы в JS

const requestUrl = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()
//     // создаём соединение
// xhr.open('GET', requestUrl)
// xhr.responseType = 'json'
//     // при запросе что сделать??
// xhr.onload = () => {
//         if (xhr.status >= 400) {
//             // значит ошибка 
//             console.log(xhr.status)
//             console.log(JSON.parse(xhr.response))
//         }
//     }
//         // данный метод обработает нетворк ошибки то есть ли не дошло соединение либо что то произошло но не статус коды
// xhr.onerror = () => {
//                 console.log(xhr.response)
//             }
//             // отправляем запрос
//         xhr.send()


// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//             // создаём соединение
//         xhr.open(method, url)
//         xhr.responseType = 'json'
//         xhr.setRequestHeader('Content-Type', 'application/json') // для получения json данных
//             // при запросе что сделать??
//         xhr.onload = () => {
//                 if (xhr.status >= 400) {
//                     // значит ошибка 
//                     console.log(xhr.status)
//                     reject(xhr.response)
//                 } else {
//                     resolve(xhr.response)
//                 }
//             }
//             // данный метод обработает нетворк ошибки то есть ли не дошло соединение либо что то произошло но не статус коды
//         xhr.onerror = () => {
//                 reject(xhr.response)
//             }
//             // отправляем запрос
//         xhr.send(JSON.stringify(body))
//     })
// }

// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(error))

const body = {
    name: 'Vladilen',
    age: 26
}

// fetch API 
// fetch возвращает сам по себе промис и метод по дефолту ГЕТ
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    if (method === 'GET') {
        return fetch(url).then(response => response.json())
    } else if (method === 'POST') {
        return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        })
    }
}

// sendRequest('GET', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(error))


// sendRequest('POST', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(error))