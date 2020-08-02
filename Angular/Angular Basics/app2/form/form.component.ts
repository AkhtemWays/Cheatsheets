import { FormControl, FormGroup, Validators } from '@angular/forms';

// FormControl  представляет из себя один хтмл элемент новые фичи после наследования лишь делаются для удобства обращения
export class ProductFormControl extends FormControl {
	label: string;
	modelProperty: string;
	constructor(label: string, property: string, value: any, validator: any) {
		super(value, validator);
		this.label = label;
		this.modelProperty = property;
	}

	getValidationMessages() {
		let messages: string[] = [];
		if (this.errors) {
			for (let errorName in this.errors) {
				switch (errorName) {
					case 'required':
						messages.push(`You must enter a ${this.label}`);
						break;
					case 'minLength':
						messages.push(
							`A ${this.label} must be at least ${this.errors['minLength'].requiredLength} characters`
						);
						break;
					case 'pattern':
						messages.push(`The ${this.label} contains illegal characters`);
						break;
				}
			}
		}
		return messages;
	}
}

export class ProductFormGroup extends FormGroup {
	constructor() {
		super({
			name: new ProductFormControl('Name', 'name', '', Validators.required),
			category: new ProductFormControl(
				'Category',
				'category',
				'',
				Validators.compose([
					Validators.required,
					Validators.pattern('^[A-Za-z ]+$'),
					Validators.minLength(3),
					Validators.maxLength(10)
				])
			),
			price: new ProductFormControl(
				'Price',
				'price',
				'',
				Validators.compose([ Validators.required, Validators.pattern('^[0-9.]+$') ])
			)
		});
	}
	// это делается с целью сделать из ключей значения ключей что являются ProductFormControl
	get productControls(): ProductFormControl[] {
		return Object.keys(this.controls).map((k) => this.controls[k] as ProductFormControl);
	}
	getFormValidationMessages(form: any): string[] {
		let messages: string[] = [];
		this.productControls.forEach((c) => c.getValidationMessages().forEach((m) => messages.push(m)));
		return messages;
	}
}
