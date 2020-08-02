// Object.create getters setters
// если создавать объекты таким способом то ключи не будут видными это потому что параметр enumerable стоит в false
// все эти параметры внутри каждого проперти называются PropertyDescriptor

// первый параметр это прототип второй это поля
const person = Object.create({
        calculateAge() {
            this.age
        }
    }, {
        name: {
            value: 'Akhtem',
            enumerable: true, // можно итерироваться
            writable: true, // можно переназначивать значения
            configurable: true // можно удалять поля у объекта, по умолчанию false
        },
        birthYear: {
            value: 1994,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() { // после геттеров можно обращаться еще одним способом person.age допустим
                return new Date().getFullYear - this.birthYear
            },
            set(value) {
                this.age = value;
            }
        }
    })
    // delete person.name

// for (let key in person) {
//     // можно пробегаться по собственным ключам объекта без прототипа таким образом
//     if (person.hasOwnProperty(key)) {
//         console.log(key, person[key])
//     }
// }
// console.log(person.name) // однако доступ есть!


// const animal = Object.create({
//     getConfigurationParams() {
//         return this.name
//     }
// }, {
//     name: {
//         value: 'Emily',
//         configurable: true,
//         enumerable: true,
//         writable: true
//     },
//     type: {
//         value: 'Dog',
//         configurable: false,
//         enumerable: true,
//         writable: false
//     },
//     age: {
//         get() {
//             return this.name.length - 3
//         },
//         set(value) {
//             this.type = value
//         }
//     }
// })

// const emily = Object.create(animal);
// emily.name = 'Emilia'
// emily.type = 'Cat'
// console.log(emily.age.set('lion'))
// for (let key in emily) {
//     console.log('Key ', key, emily[key])
// }

// ES6 classes

// // class Animal {

// //     static type = 'ANIMAL' // ЕСЛИ переменная статическая то доступ к ней есть только через базовый класс Animal никак не через переменные

// //     constructor(props) {
// //         this.name = props.name
// //         this.age = props.age
// //         this.hasTail = props.name
// //     }
// //     voice() { // метода не будет присутствовать в главных свойствах но будет в прототипе
// //         console.log('I am animal')
// //     }
// // }

// // const animal = new Animal({
// //     name: 'John',
// //     age: 5,
// //     hasTail: true
// // })

// // console.log(animal)

// // Proxy

// // Proxy это класс в JS который позволяет делать ловушки
// // Objects
// // const person = {
// //     name: 'Vladilen',
// //     age: 25,
// //     job: "Fullstack"
// // }

// // const proxyPerson = new Proxy(person, {
// //     get(target, prop) {
// //         return target[prop]
// //     },
// //     set(target, prop, value) {
// //         if (prop in target) {
// //             target[prop] = value
// //         } else {
// //             throw new Error('No such prop found')
// //         }
// //     },
// //     has(target, prop) {
// //         return ['name', 'age', 'job'].includes(prop)
// //     },
// //     deleteProperty(target, prop) {
// //         if (prop in target) {
// //             delete target[prop]
// //             return true
// //         } else {
// //             console.log('No such prop found')
// //             return false
// //         }
// //     }
// // })

// // Functions Proxy

// // const log = text => 'Log: ' + text;

// // const fp = new Proxy(log, {
// //     // метод apply применяется при вызове этой функции 
// //     apply(target, thisArg, args) { // thisArg - контекст который возможно из какого то класса args - аргументы
// //         console.log('Calling fn...')
// //         target.apply(thisArg, args)
// //     }
// // })

// // Classes Proxy

// // class Person {
// //     constructor(name, age) {
// //         this.name = name
// //         this.age = age
// //     }
// // }

// // const PersonProxy = new Proxy(Person, {
// //     // перехват конструктора
// //     construct(target, args) {
// //         console.log('Getting constructed')
// //         return new target(args)
// //     }
// // })

// // Wrapper

// // const withDefaultValue = (target, defaultValue = 0) => new Proxy(target, {
// //     get(obj, prop) {
// //         return prop in obj ? obj[prop] : defaultValue
// //     }
// // })

// // const position = withDefaultValue({
// //     x: 24,
// //     y: 42
// // }, 0)
// // console.log(position)

// // const withHiddenKeys = (target, prefix = '_') => new Proxy(target, {
// //     has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
// //     ownKeys: (obj) => Reflect.ownKeys(obj).filter(pr => !pr.startsWith(prefix)),
// //     // receiver это ссылка на этот самый прокси объект что мы возвращаем, он мне нужен для того чтобы проверить что то именно в нём
// //     // а не в данном объекте что пришёл от пользователя
// //     get: (obj, prop, receiver) => prop in receiver ? obj[prop] : void 0 // void 0 === undefined

// // })

// // const data = withHiddenKeys({
// //     name: 'Vladilen',
// //     age: 25,
// //     _uid: '344545642'
// // }, '_')

// // Optimization

// const withIndexedArray = new Proxy(Array, {
//     construct(target, [args]) {
//         const index = {}
//         args.forEach(item => index[item.id] = item)
//         return new Proxy(target(...args), {
//             // prop === 'push'
//             get: (arr, prop) => {
//                 switch (prop) {
//                     case 'push':
//                         return item => {
//                             index[item.id] = item
//                             arr[prop].call(arr, item)
//                         }
//                     case 'findById':
//                         return id => index[id]
//                     default:
//                         return arr[prop]
//                 }
//             }
//         })
//     }
// })

// // the bigger you are the bigger you grow