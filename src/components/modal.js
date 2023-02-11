import { configSelectorForm } from "./constants.js";
import { toggleButtonDisabled } from "./validate.js";
import { changeUserAvatar, changeUserInfo } from "./api.js";
import { resetForm, saveStatus } from "./utils.js";


//КОНСТАНТЫ ПОПАПА
const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
export const userName = document.querySelector('.profile__name');
export const userProfession = document.querySelector('.profile__profession');
export const editAvatarButton = document.querySelector('.profile__avatar');

export const profilePopup = document.querySelector('.popup_profile');
export const placePopup = document.querySelector('.popup_place');
export const photoPopup = document.querySelector('.popup_photo');
export const avatarPopup = document.querySelector('.popup_avatar');

export const popupPhotoImage = document.querySelector('.popup__image');
export const popupPhotoCaption = document.querySelector('.popup__caption');

//КОНСТАНТЫ ФОРМЫ
export const formProfileElement = document.forms['profile-form'];
export const userNameInput = formProfileElement.querySelector('.popup__name');
export const userDescriptionInput = formProfileElement.querySelector('.popup__description');

export const formPlaceElement = document.forms['place-form'];
export const userNamePlaceInput = formPlaceElement.querySelector('.popup__name');
export const userDescriptionPlaceInput = formPlaceElement.querySelector('.popup__description');

export const formAvatarElement = document.forms['avatar-form'];
export const userAvatarInput = formAvatarElement.querySelector('.popup__description');

export const popupPlaceFormSubmitButton = document.querySelector('.popup_place .popup__submit-button');
const popupProfileFormSubmitButton = document.querySelector('.popup_profile .popup__submit-button');
const popupAvatarFormSubmitButton = document.querySelector('.popup_avatar .popup__submit-button');

//ОТКРЫТИЕ ПОПАПА ФОРМЫ И КАРТОЧКИ
editProfileButton.addEventListener('click', () => {
  userNameInput.value = userNameInput.value || userName.textContent;
  userDescriptionInput.value = userDescriptionInput.value || userProfession.textContent;
  openPopup(profilePopup);
})

addPlaceButton.addEventListener('click', () => {
  openPopup(placePopup);
});

editAvatarButton.addEventListener('click', () => {
  openPopup(avatarPopup);
});

//ОБРАБОТЧИКИ ЗАКРЫТИЯ И ОТКРЫТИЯ ПОПАПА + ESCAPE
 export function openPopup(modalElement) {

  const handlePopupClose = () => {
    modalElement.classList.remove('popup_opened');
    window.removeEventListener('keydown', handleEscape);
    modalElement.removeEventListener('click', handleModalClick);
  };

  const handleEscape = (event) => {
    const isEsc = event.key === 'Escape';

    if (isEsc === true) {
      handlePopupClose();
    }
  };

  const handleModalClick = (event) => {
    const itsEmpty = event.target.classList.contains('popup');
    const itsButtonClose = event.target.classList.contains('popup__close-button');

    if (itsEmpty || itsButtonClose) {
      handlePopupClose();
    }
  };

  modalElement.closePopup = handlePopupClose;
  modalElement.addEventListener('click', handleModalClick);
  window.addEventListener('keydown', handleEscape);
  modalElement.classList.add('popup_opened');
}

export function closePopup(modalElement) {
  modalElement.closePopup();
}

//ОБРАБОТЧИК ПОПАПА ПРОФАЙЛА
export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  saveStatus(true, popupProfileFormSubmitButton);
  changeUserInfo(userNameInput.value, userDescriptionInput.value)
    .then((data) => {
      toggleButtonDisabled(popupProfileFormSubmitButton, false, configSelectorForm);
      userName.textContent = data.name;
      userProfession.textContent = data.about;
      closePopup(profilePopup);
      resetForm(formProfileElement);
    })
    .catch((err) => console.error(`Ошибка создания карточки: ${err}`))
    .finally(() => {
      saveStatus(false, popupProfileFormSubmitButton);
    });
}

//ОБРАБОТЧИК ПОПАПА АВАТАРА
export function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  saveStatus(true, popupAvatarFormSubmitButton);
  changeUserAvatar(userAvatarInput.value)
  .then(data => {
    toggleButtonDisabled(popupAvatarFormSubmitButton, false, configSelectorForm);
    editAvatarButton.src = data.avatar;
    editAvatarButton.alt = data.name;
    closePopup(avatarPopup);
    resetForm(formAvatarElement);
  })
  .catch((err) => console.error(`Ошибка создания аватара: ${err}`))
  .finally(() => {
    saveStatus(false, popupAvatarFormSubmitButton);
  })
}



