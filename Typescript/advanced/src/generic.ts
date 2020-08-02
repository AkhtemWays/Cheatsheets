// // тип дженерика стринг опараметризововает тип data на выходе
// const promise: Promise<string> = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve('Promise resolved');
// 	}, 2000);
// });

// // тут
// promise.then((data) => {
// 	console.log();
// });

// // нужно писать явно для типов от кого наследуются для понимания
// function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
// 	return Object.assign({}, a, b);
// }

// const merged = mergeObjects({ name: 'Vladilen' }, { age: 26 });
// // const merged1 = mergeObjects('aaa', 'bbb'); для того чтобы подобные строки не компилировались и не делали бреда
// console.log(merged);

// // ================================

// type ILength = {
// 	length: number;
// };

// function withCount<T extends ILength>(value: T): { value: T; count: string } {
// 	return {
// 		value,
// 		count: `В этой строке ${value.length} символов`
// 	};
// }

// // =========================

// // function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
// // 	return obj[key];
// // }

// // const person = {
// // 	name: 'Vladilen',
// // 	age: 26
// // };

// // console.log(getObjectValue(person, 'name'));
// // console.log(getObjectValue(person, 'age'));
// // console.log(getObjectValue(person, 'job'));

// class Collection<T> {
// 	constructor(private _items: T[] = []) {}

// 	add(item: T) {
// 		this._items.push(item);
// 	}

// 	remove(item: T) {
// 		this._items = this._items.filter((i) => i !== item);
// 	}

// 	get items(): T[] {
// 		return this._items;
// 	}
// }

// const strings = new Collection<string>([ 'I', 'AM', 'STRING' ]);
// strings.add('!');

// // ============================

// type Car = {
// 	model: string;
// 	year: number;
// };

// function createAndValidateCar(model: string | undefined, year: number | undefined): Car {
// 	let car: Partial<Car> = {}; // Partial означает что мы временно хотим создать пустой объект а потом его заполнить иначе не позволит тс так сделать
// 	if (model.length > 3) {
// 		car.model = model;
// 	}
// 	if (year > 2000) {
// 		car.year = year;
// 	}
// 	return car as Car;
// }

// // ========================

// const cars: Readonly<Array<string>> = [ 'Ford', 'Audi' ];

// // по дефолту константа в JS ПОЗВОляет изменять состояние но если вызвать ридонли то будет как с++
