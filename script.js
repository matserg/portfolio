var form = document.getElementById('form');
function validate(event) {
  event.preventDefault();
  var check = 0;
  check += inputValidation('name');
  check += inputValidation('email');
  check += inputValidation('subject');
  check += inputValidation('message');
  if (check == 0) {
    var inner = document.getElementById('inner');
    inner.innerHTML = ('Спасибо, ваша заявка отправлена!');
  }
}
function inputValidation(id) {
  var inputName = document.getElementById(id);
  var inputNameValue = inputName && inputName.value;
  if (inputNameValue === '') {
    inputName.style.borderBottom = '5px solid red';
    return 1;
  } else {
    inputName.style.borderBottom = '5px solid rgba(0, 0, 0, 0.5)';
    return 0;
  }
}
form.addEventListener('submit', validate);





// var form = document.getElementById('form');
// function validate(event) {
// 	event.preventDefault();
// 	var check = 0;
// 	var inputId = ['name', 'email', 'subject', 'message'];
// 	for (var i = 0; i < inputId.length; i++) {
// 		var inputName = document.getElementById(inputId[i]);
// 		var inputNameValue = inputName && inputName.value;
// 		if (inputNameValue === '') {
// 			inputName.style.borderBottom = '5px solid red';
// 			check += 1;
// 		} else {
// 			inputName.style.borderBottom = '5px solid rgba(0, 0, 0, 0.5)';
// 		}
// 	}
// 	if (check == 0) {
// 		var inner = document.getElementById('inner2');
// 		inner.style.opacity = 1;
// 	}
// }
// form.addEventListener('submit', validate);






