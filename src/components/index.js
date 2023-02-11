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
  handleProfileFormSubmit,
  handleAvatarFormSubmit,
  userName,
  userProfession,
} from "./modal.js";
import { configSelectorForm } from "./constants.js";

//вводим переменную для айди вместо хардкод значения ранее, далее передаем пер в запросе к серверу
export let myUserId = '';

//Промис получает сразу все необходимые нам данные при загрузке страницы
Promise.all([getUserInfo(), getAllCards()])
  .then(([userData, cards]) => {
    editAvatarButton.src = userData.avatar;
    userName.textContent = userData.name;
    userProfession.textContent = userData.about;
    myUserId = userData._id;
    cards.forEach((card) => {
      const newCard = createElement(card);
       listOfElements.append(newCard);
    })
  })
  .catch(err => {
    console.log(err)
  });

formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);

formProfileElement.addEventListener('submit', handleProfileFormSubmit);

formAvatarElement.addEventListener('submit', handleAvatarFormSubmit);

enableValidation(configSelectorForm);
