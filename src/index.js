import "./pages/index.css";
import { initialCards } from "./components/defaultCards.js";
import { enableValidation } from "./components/validate.js";
import { createElement, handleFormPlaceSubmit } from "./components/card.js";
import { listOfElements } from "./components/utils.js";
import { formPlaceElement, formProfileElement, handleFormSubmit  } from "./components/modal.js";

initialCards.forEach(function (card) {
  const newCard = createElement(card);
  listOfElements.append(newCard)
})

formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);

formProfileElement.addEventListener('submit', handleFormSubmit);

//КОНФИГУРАЦИОННЫЙ ОБЪЕКТ
export const configSelectorForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
};

enableValidation(configSelectorForm);






















