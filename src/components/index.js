import "../pages/index.css";
import "./api.js";
import { getUserInfo, getAllCards } from "./api.js";
import { createElement, handleFormPlaceSubmit } from "./card.js";
import { enableValidation } from "./validate.js";
import { listOfElements } from "./utils.js";
import {
  editAvatarButton,
  formPlaceElement,
  formProfileElement,
  formAvatarElement,
  handleFormSubmit,
  handleFormAvatarSubmit,
  userName,
  userProfession,
} from "./modal.js";


//отобразим карточки, которые есть для нас на сервере
export const showAllCards = () => {
  listOfElements.replaceChildren();

  getAllCards()
  .then((data) => {
    data.forEach((card) => {
      const newCard = createElement(card);
       listOfElements.append(newCard);
    })
  });
};

showAllCards();

getUserInfo().then((res) => {
  editAvatarButton.src = res.avatar;
  userName.textContent = res.name;
  userProfession.textContent = res.about;
});

formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);

formProfileElement.addEventListener('submit', handleFormSubmit);

formAvatarElement.addEventListener('submit', handleFormAvatarSubmit);

//КОНФИГУРАЦИОННЫЙ ОБЪЕКТ
export const configSelectorForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
};

enableValidation(configSelectorForm);
