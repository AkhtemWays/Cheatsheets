import {
	Directive,
	ElementRef,
	Attribute,
	Input,
	SimpleChange,
	Output,
	EventEmitter,
	HostBinding,
	HostListener
} from '@angular/core';
import { Product } from './product.model';

// 1
// @Directive({
// 	selector: '[pa-attr]' // все элементы с этим атрибутом можно будет добавлять, при этом нужно добавлять префикс pa чтобы различать их потом
// })
// export // чтобы импортировать директиву нужно в файле с модулями добавить этот класс в декларации
// class PaAttrDirective {
// 	// здесь bgClass это параметр на который применен декоратор и после этого можно будет обращаться к нему в документе
// 	constructor(element: ElementRef, @Attribute('pa-attr') bgClass: string) {
// 		// ElementRef который дает ангуляр когда создает новый инстанс директивы и у него есть единственный
// 		element.nativeElement.classList.add(bgClass || 'bg-success', 'text-white'); // аттрибут nativeElement который возвращает объект для описаниия хтмл элемента в ДОМе
// 	}
// }

// 2
@Directive({
	selector: '[pa-attr]' // все элементы с этим атрибутом можно будет добавлять, при этом нужно добавлять префикс pa чтобы различать их потом
})
export // чтобы импортировать директиву нужно в файле с модулями добавить этот класс в декларации
class PaAttrDirective {
	// здесь bgClass это параметр на который применен декоратор и после этого можно будет обращаться к нему в документе

	// ElementRef который дает ангуляр когда создает новый инстанс директивы и у него есть единственный
	@Input('pa-attr')
	@HostBinding('class')
	bgClass: string;
	@Input('pa-product') product: Product;

	@Output('pa-category') click = new EventEmitter<string>(); // этот класс дает евент механизм для ангулярных директив, тип дает понять что этот
	// евент получит строку когда евент триггернётся
	@HostListener('click')
	triggerCustomEvent() {
		if (this.product != null) {
			this.click.emit(this.product.category);
		}
	}
	// используется когда компонента установилась и все свойства установлены
	// ngOnInit() {
	//   this.element.nativeElement.classList.add(this.bgClass || "bg-success", "text-white");
	// }
	ngOnChanges(changes: { [property: string]: SimpleChange }) {
		let change = changes['bgClass'];
		let classList = this.element.nativeElement.classList;
		// isFirstChange даст тру если этот вызов произошел прямо до вызова ngOnInit previousValue это значение инпута предыдущее
		if (!change.isFirstChange() && classList.contains(change.previousValue)) {
			classList.remove(change.previousValue);
		}
		if (!classList.contains(change.currentValue)) {
			classList.add(change.currentValue);
		}
	}

	// ngOnChanges этот метод вызывается когда значение инпута меняется или прям до того как ngOnInit вызывается
	// ngDoCheck это метод вызывается когда ангуляр ищет изменения и в этот момент директивы имеют возможность апдейтнутся которые
	// не асоциируются с инпутом
	// ngAfterContentInit этот метод вызывается когда когда содержимое директивы проинициализированно
	// ngAfterContentChecked этот метод вызывается после того как содержимое директивы прошло проверку на изменения
	// ngOnDestroy этот метод вызывается сразу тогда когда ангуляр убивает директиву
}
