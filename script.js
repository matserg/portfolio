var form = document.getElementById('form');
function validate(event) {
  event.preventDefault();
  var check = false;
  check += inputValidation('name');
  check += inputValidation('email');
  check += inputValidation('subject');
  check += inputValidation('message');
  if (check == false) {
    var inner = document.getElementById('inner');
    inner.innerHTML = ('Спасибо, ваша заявка отправлена!');
  }
}
function inputValidation(id) {
  var inputName = document.getElementById(id);
  var inputNameValue = inputName && inputName.value;
  if (inputNameValue === '') {
    inputName.style.borderBottom = '5px solid red';
    return true;
  } else {
    inputName.style.borderBottom = '5px solid rgba(0, 0, 0, 0.5)';
    return false;
  }
}
form.addEventListener('submit', validate);

// var form = document.getElementById('form');
// function validate(event) {
// 	event.preventDefault();
// 	var check = true;
// 	var inputId = ['name', 'email', 'subject', 'message'];
// 	for (var i = 0; i < inputId.length; i++) {
// 		var inputName = document.getElementById(inputId[i]);
// 		var inputNameValue = inputName && inputName.value;
// 		if (inputNameValue === '') {
// 			inputName.style.borderBottom = '5px solid red';
// 			check = false;
// 		} else {
// 			inputName.style.borderBottom = '5px solid rgba(0, 0, 0, 0.5)';
// 		}
// 	}
// 	if (check === true) {
// 		var inner = document.getElementById('inner2');
// 		inner.style.opacity = 1;
// 	}
// }
// form.addEventListener('submit', validate);






