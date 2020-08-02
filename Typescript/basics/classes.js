var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//   constructor(theModel: string) {
//     this.model = theModel // можно поменять только внутри конструктора поля типа ридонли
//   }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    } // более лаконичная запись определения сразу строк внутрь конструктора
    return Car;
}());
// ======================
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
        // this.go() // не можем однако использовать приватный метод потому что он доступен только классу animal и никому больше!
    };
    Cat.prototype.Yell = function () {
        return this.voice;
        // return this.go()
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('test');
console.log(cat.Yell());
// cat.voice нельзя использовать из за протектед свойства
// =================
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is String';
    };
    return AppComponent;
}(Component));
var app = new AppComponent();
console.log(app.render());
console.log(app.info());
