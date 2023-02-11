import { myUserId } from "./index.js";
import { addCardServer, deleteCardServer, getLike, deleteLike } from "./api.js";
import { toggleButtonDisabled } from "./validate.js";
import { listOfElements, resetForm, saveStatus } from "./utils.js";
import {
  photoPopup,
  popupPhotoImage,
  popupPhotoCaption,
  placePopup,
  userNamePlaceInput,
  userDescriptionPlaceInput,
  popupPlaceFormSubmitButton,
  closePopup,
  openPopup,
  formPlaceElement
 } from "./modal.js"
 import { configSelectorForm } from "./constants.js";

//6 КАРТОЧЕК ИЗ КОРОБКИ И РЕНДЕР КАРТОЧЕК
const template = document.querySelector('#element-template').content.querySelector('.elements__item');

export function createElement(card) {
  const cardElement = template.cloneNode(true);
  const elementsImage = cardElement.querySelector('.elements__image');
  const elementsTitle = cardElement.querySelector('.elements__item-title');
  const elementsLike = cardElement.querySelector('.elements__like-button');
  const elementsDelete = cardElement.querySelector('.elements__delete-button');
  const likeCounter = cardElement.querySelector('.elements__like-count');

  elementsLike.addEventListener('click', () => {
    if (elementsLike.classList.contains('elements__like-button_active')) {
      deleteLike(card._id)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
        elementsLike.classList.remove('elements__like-button_active');
      })
      .catch((err) => console.log('Ошибка связана с лайком', err));
    } else {
      getLike(card._id)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
        elementsLike.classList.add('elements__like-button_active');
      })
      .catch((err) => console.log('Ошибка связана с лайком', err));
    }
  });

  elementsImage.addEventListener('click', () => {
    popupPhotoImage.src = card.link;
    popupPhotoImage.alt = card.link;
    popupPhotoImage.title = card.link;
    popupPhotoCaption.textContent = card.name;
    openPopup(photoPopup);
  });

  elementsDelete.addEventListener('click', () => {
    deleteCardServer(card._id)
    .then(() => cardElement.remove())
    .catch((err) => console.log(err));
  });

  elementsTitle.textContent = card.name;
  elementsImage.src = card.link;
  elementsImage.alt = card.name;
  likeCounter.textContent = card.likes.length; //получаем длину массива лайков с объекта карточки

  // проверяем айди карточки и блокируем удаление чужой карточки
  if (!(card.owner._id === myUserId)) {
    elementsDelete.classList.add('elements__delete-button_hidden');
  }

  // меняем состояние иконки, если там есть мой айди
  card.likes.forEach(like => {
    if (like._id === myUserId) {
      elementsLike.classList.add('elements__like-button_active');
    }
  })

  return cardElement;
}

//ДОБАВИТЬ КАРТОЧКУ НА СТРАНИЦУ
export function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  saveStatus(true, popupPlaceFormSubmitButton);
  addCardServer(userNamePlaceInput.value, userDescriptionPlaceInput.value)
    .then((res) => {
      toggleButtonDisabled(popupPlaceFormSubmitButton, false,configSelectorForm);
      //добавляем точечно карточку в начало массива
      listOfElements.prepend(createElement(res));
      closePopup(placePopup);
      resetForm(formPlaceElement);
    })
    .catch(() => {
      console.error('Ошибка создания карточки');
    })
    .finally(() => {
      saveStatus(false, popupPlaceFormSubmitButton);
    })
}
