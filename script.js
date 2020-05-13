// var form = document.getElementById('form');
// function validate(event) {
//   event.preventDefault();
//   isValid('name');
//   isValid('email');
//   isValid('subject');
//   isValid('message');

//   var isCorrect = isValid('name') && isValid('email') && isValid('subject') && isValid('message');
//   if (isCorrect) {
//     var inner = document.getElementById('inner');
//     inner.innerHTML = ('Спасибо, ваша заявка отправлена!');
//   }
// }
// function isValid(id) {
//   var inputName = document.getElementById(id);
//   var inputNameValue = inputName && inputName.value;
//   if (inputNameValue === '') {
//     inputName.style.borderBottom = '5px solid red';
//     return false;
//   } else {
//     inputName.style.borderBottom = '5px solid rgba(0, 0, 0, 0.5)';
//     return true;
//   }
// }
// form.addEventListener('submit', validate);

var form = document.getElementById('form');
function validate(event) {
	event.preventDefault();
	var check = true;
	var inputId = ['name', 'email', 'subject', 'message'];
	for (var i = 0; i < inputId.length; i++) {
		var inputName = document.getElementById(inputId[i]);
		var inputNameValue = inputName && inputName.value;
		if (inputNameValue === '') {
			inputName.style.borderBottom = '5px solid red';
			check = false;
		} else {
			inputName.style.borderBottom = '5px solid rgba(0, 0, 0, 0.5)';
		}
	}
	if (check === true) {
		var inner = document.getElementById('inner2');
		inner.style.opacity = 1;
	}
}
form.addEventListener('submit', validate);






