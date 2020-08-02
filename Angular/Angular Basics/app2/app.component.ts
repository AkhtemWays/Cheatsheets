import { Component } from '@angular/core';
import { ProductFormGroup } from './form/form.component'; // это для модельного подхода к созданию форм
// import Model, Product from './...' модель определенная в книге

export interface Card {
	title: string;
	text: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'first-app';
	toggle = true;
	cards: Card[] = [
		{ title: 'Card 1', text: 'This is card number 1' },
		{ title: 'Card 2', text: 'This is card number 2' },
		{ title: 'Card 3', text: 'This is card number 3' },
		{ title: 'Card 4', text: 'This is card number 4' },
		{ title: 'Card 5', text: 'This is card number 5' },
		{ title: 'Card 6', text: 'This is card number 6' }
	];
	toggleCards() {
		this.toggle = !this.toggle;
	}
}

// книга

@Component({
	selector: 'app',
	templateUrl: 'template.html'
})
export class ProductComponent {
	model: Model = new this.model();
	form: ProductFormGroup = new ProductFormGroup();

	getProduct(key: number): Product {
		return this.model.getProduct(key);
	}

	getProducts(): Product[] {
		return this.model.getProducts();
	}

	newProduct: Product = new Product();

	get jsonProduct() {
		return JSON.stringify(this.newProduct);
	}
	addProduct(p: Product) {
		console.log('New Product: ' + this.jsonProduct);
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
