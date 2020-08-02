function strip(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2);
	} else {
		x.trim();
	}
}

class MyResponse {
	header = 'response header';
	result = 'response result';
}

class MyError {
	header = 'error header';
	message = 'error message';
}

// хэндл разных инстансов приходящих объектов
function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result
		};
	} else {
		return {
			info: res.header + res.message
		};
	}
}

// =========================

type AlertType = 'success' | 'danger' | 'warning'; // задание типа с помощью названия строки

function setAlertType(type: AlertType) {
	//...
}

setAlertType('success');
setAlertType('warning');
// setAlertType('go') // это задать не сможем!
