class Typescript {
	version: string;
	constructor(version: string) {
		this.version = version;
	}

	info(name: string) {
		return `[${name}]: Typescript version is ${this.version}`;
	}
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel // можно поменять только внутри конструктора поля типа ридонли
//   }
// }

class Car {
	readonly numberOfWheels: number = 4;
	constructor(readonly model: string) {} // более лаконичная запись определения сразу строк внутрь конструктора
}

// ======================

class Animal {
	protected voice: string = '';
	public color: string = 'black';
	constructor() {
		this.go();
	}
	private go() {
		console.log('Go');
	}
}

class Cat extends Animal {
	public setVoice(voice: string) {
		this.voice = voice;
		// this.go() // не можем однако использовать приватный метод потому что он доступен только классу animal и никому больше!
	}
	public Yell(): string {
		return this.voice;
		// return this.go()
	}
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.Yell());
// cat.voice нельзя использовать из за протектед свойства

// =================

abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log('Component on render');
	}

	info(): string {
		return 'This is String';
	}
}

const app: AppComponent = new AppComponent();
console.log(app.render());
console.log(app.info());
