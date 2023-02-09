//VALIDATION JS ВЫБИРАЕМ ВСЕ ФОРМЫ В ДОМЕ И ПРОВЕРЯЕМ ПОЛЯ + КНОПКА САБМИТА
function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass)
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
}

export function toggleButtonDisabled(buttonElement, isActive, config) {
  if (isActive) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  }
}

function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!errorElement) return;

  if (!isInputValid) {
    showError(inputElement, errorElement, config)
  } else {
    hideError(inputElement, errorElement, config)
  }
}

function setEventListener (formElement, config) {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonDisabled(submitButtonElement, formElement.checkValidity(), config);

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  [...inputList].forEach((inputElement) => {
    inputElement.addEventListener('input', () => {

      //блокировка или разблокировка кнопки
      toggleButtonDisabled(submitButtonElement, formElement.checkValidity(), config);
      checkInputValidity(inputElement, formElement, config);
    })
  })
}

export function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);

  [...forms].forEach((formElement) => {

    //блокировка кнопки, если форма не валидна
    setEventListener(formElement, config);
  })
}
