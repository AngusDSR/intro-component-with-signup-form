const form = document.querySelector('form');
const formInputs = document.querySelectorAll('input');
const errorText = document.createElement("P");

form.addEventListener('submit', (e)=> {
	e.preventDefault();
	resetErrorMessages();
	formValidator()
});

function formValidator () {

	for (let field of formInputs) {
		if (field.validity.valueMissing) {	
			field.nextElementSibling.innerHTML = field.ariaLabel + ' cannot be empty';
			field.classList.add("input-error");
			field.nextElementSibling.nextElementSibling.classList.add("input-error");

		} else if (field.validity.typeMismatch) {
			field.nextElementSibling.innerHTML = 'Looks like this is not an ' + field.type;
			field.classList.add("input-error");

		} else if (field.validity.tooShort) {
			field.nextElementSibling.innerHTML = field.ariaLabel + ' must be minimum 8 characters';
			field.classList.add("input-error");

		} else {
			// submit form
		}
	}
};

function resetErrorMessages () {
	for (let field of formInputs) {
		field.classList.remove("input-error");
		field.nextElementSibling.innerHTML = '';
	}	
}
