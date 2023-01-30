import { configSelectorForm } from "../index.js";
import { toggleButtonDisabled } from "./validate.js";


//КОНСТАНТЫ ПОПАПА
const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const userName = document.querySelector('.profile__name');
const userProfession = document.querySelector('.profile__profession');

export const profilePopup = document.querySelector('.popup_profile');
export const placePopup = document.querySelector('.popup_place');
export const photoPopup = document.querySelector('.popup_photo');

export const popupPhotoImage = document.querySelector('.popup__image');
export const popupPhotoCaption = document.querySelector('.popup__caption');

//КОНСТАНТЫ ФОРМЫ
export const formProfileElement = profilePopup.querySelector('.popup__form');
const userNameInput = formProfileElement.querySelector('.popup__name');
const userDescriptionInput = formProfileElement.querySelector('.popup__description');

export const formPlaceElement = placePopup.querySelector('.popup__form');
export const userNamePlaceInput = formPlaceElement.querySelector('.popup__name');
export const userDescriptionPlaceInput = formPlaceElement.querySelector('.popup__description');

const popupPlaceFormSubmitButton = document.querySelector('.popup_place .popup__submit-button');
const popupProfileFormSubmitButton = document.querySelector('.popup_profile .popup__submit-button');

//ОТКРЫТИЕ ПОПАПА ФОРМЫ И КАРТОЧКИ
editProfileButton.addEventListener('click', () => {
  userNameInput.value = userName.textContent;
  userDescriptionInput.value = userProfession.textContent;
  toggleButtonDisabled(popupProfileFormSubmitButton, formProfileElement.checkValidity(), configSelectorForm);
  openPopup(profilePopup);
});

addPlaceButton.addEventListener('click', () => {
  toggleButtonDisabled(popupPlaceFormSubmitButton, formPlaceElement.checkValidity(), configSelectorForm);
  openPopup(placePopup);
});

//ОБРАБОТЧИКИ ЗАКРЫТИЯ И ОТКРЫТИЯ ПОПАПА + ESCAPE
export function openPopup(modalElement) {

  const localClosePopup = () => {
    modalElement.classList.remove('popup_opened');
    window.removeEventListener('keydown', localEscClosePopup);
    modalElement.removeEventListener('click', modalClick);
  };

  const localEscClosePopup = (event) => {
    const isEsc = event.key === 'Escape';

    if (isEsc === true) {
      localClosePopup();
    }
  };

  const modalClick = (event) => {
    const itsEmpty = event.target.classList.contains('popup');
    const itsButtonClose = event.target.classList.contains('popup__close-button');

    if (itsEmpty || itsButtonClose) {
      localClosePopup();
    }
  };

  modalElement.closePopup = localClosePopup;
  modalElement.addEventListener('click', modalClick);
  window.addEventListener('keydown', localEscClosePopup);
  modalElement.classList.add('popup_opened');
}

export function closePopup(modalElement) {
  modalElement.closePopup();
}


//ОБРАБОТЧИК ПОПАПА ФОРМЫ
export function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userProfession.textContent = userDescriptionInput.value;
  closePopup(profilePopup);
}


