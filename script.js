const form = document.querySelector('form');
const formInputs = document.querySelectorAll('input');
const errorText = document.createElement("P");

form.addEventListener('submit', (e)=> {
	e.preventDefault();
	formValidator()
});

function formValidator () {
	for (let field of formInputs) {
		field.addEventListener('input', (e)=> {
			field.nextElementSibling.firstElementChild.innerHTML = ''
			field.classList.remove("input-error");
			field.nextElementSibling.nextElementSibling.classList.remove("input-error");
		});

		if (field.validity.valueMissing) {	
			field.nextElementSibling.firstElementChild.innerHTML = field.ariaLabel + ' cannot be empty';
			field.nextElementSibling.nextElementSibling.classList.add("input-error");
			field.classList.add("input-error");

		} else if (field.validity.typeMismatch) {
			field.nextElementSibling.firstElementChild.innerHTML = 'Looks like this is not an ' + field.type;
			field.nextElementSibling.nextElementSibling.classList.add("input-error");
			field.classList.add("input-error");

		} else if (field.validity.tooShort) {
			field.nextElementSibling.firstElementChild.innerHTML = field.ariaLabel + ' must be minimum 8 characters';
			field.nextElementSibling.nextElementSibling.classList.add("input-error");
			field.classList.add("input-error");

		} else {
			// [submit form]
		}
	}
};

function reValidate () {
	for (let field of formInputs) {
		field.addEventListener('focusout', (e) => {
			console.log()
		})
	}

}