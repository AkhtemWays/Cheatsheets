import { FormControl } from '@angular/forms';

export class LimitValidator {
	static Limit(limit: number) {
		// когда ангуляр видит кастомную валидационную функцию он снабжает ее аргументом формКонтроль
		return (control: FormControl): { [key: string]: any } => {
			let val = Number(control.value); // здесь достается значение введенное пользователем и сравнивает его с лимитом
			if (val != NaN && val > limit) {
				return { limit: { limit: limit, actualValue: val } }; // возвращаем объект с фейлами в данном случае это лимит, потому что не прошёл лимит
			} else {
				return null;
			}
		};
	}
}
