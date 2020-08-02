import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';
import { NgForm } from '@angular/forms'; // это нужно для полной валидации формы



@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ],
	interpolation: [ '[[', ']]' ]
})
export class CardComponent implements OnInit {
	@Input() card: Card;
	@Input() index: number;

	title = 'My Card Title';
	text = 'My sample Text';

	cardDate: Date = new Date();
	array = [ 1, 1, 2, 3, 5, 8, 13 ];
	obj = { name: 'Vladilen', info: { age: 25, job: 'frontend' } };
	imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
	disabled = false;
	textColor: string;
	getInfo(): string {
		return 'HAHAHA';
	}
	changeTitle() {
		this.card.title = 'Title has been changed';
	}

	constructor() {}
	inputHandler(value: any) {
		// const value = event.target.value;
		this.title = value;
	}
	changeHandler() {
		console.log(this.title);
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.imgUrl = 'https://screenshot.codepen.io/1160092.ZJoyPx.small.8d420f84-47a1-48bc-8208-bb7f3a51e91d.png';
			this.disabled = !this.disabled;
		}, 3000);
	}
}

// методы из книги
// newProduct: Product = new Product()
// get jsonProduct() {
//   return JSON.stringify(this.newProduct)
// }
// addProduct(p: Product) {
//   console.log("New product: " + this.jsonProduct);
// }

// логика для валидационных сообщений вне хтмл документа
getValidationMessages(state: any, thingName?: string) {
  let thing: string = state.path || thingName;
  let messages: string[] = [];
  if (state.errors) {
    for (let errorName in state.errors) {
      switch (errorName) {
        case "required":
          messages.push(`You must enter a ${thing}`)
          break;
        case "minLength":
          messages.push(`A ${thing} must be at least ${state.errors['minLength'].requiredLength} characters`);
          break;
        case "pattern":
          messages.push(`The ${thing} contains illegal characters`);
          break;
      }
    }
  }
}

// возможный класс для валидации полной формы
export class ProductComponent {
	model: Model = new Model();
	// какие то методы тут
  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${thing}`)
            break;
          case "minLength":
            messages.push(`A ${thing} must be at least ${state.errors['minLength'].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
  }
  // конечная валидация надеюсь...
  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
    })
    return messages;
  }
	formSubmitted: boolean = false;

	submitForm(form: NgForm) {
		this.formSubmitted = true;
		if (form.valid) {
			this.addProduct(this.newProduct);
			this.newProduct = new Product();
			form.reset();
			this.formSubmitted = false;
		}
	}
}
