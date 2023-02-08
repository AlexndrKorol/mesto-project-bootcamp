import { configSelectorForm } from "./index.js";
import { toggleButtonDisabled } from "./validate.js";
import { changeUserAvatar, changeUserInfo } from "./api.js";
import { defferedFuncPromise, saveStatus } from "./utils.js";


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
export const formProfileElement = profilePopup.querySelector('.popup__form');
export const userNameInput = formProfileElement.querySelector('.popup__name');
export const userDescriptionInput = formProfileElement.querySelector('.popup__description');

export const formPlaceElement = placePopup.querySelector('.popup__form');
export const userNamePlaceInput = formPlaceElement.querySelector('.popup__name');
export const userDescriptionPlaceInput = formPlaceElement.querySelector('.popup__description');

export const formAvatarElement = avatarPopup.querySelector('.popup__form');
export const userAvatarInput = formAvatarElement.querySelector('.popup__description');

export const popupPlaceFormSubmitButton = document.querySelector('.popup_place .popup__submit-button');
const popupProfileFormSubmitButton = document.querySelector('.popup_profile .popup__submit-button');
const popupAvatarFormSubmitButton = document.querySelector('.popup_avatar .popup__submit-button');

//ОТКРЫТИЕ ПОПАПА ФОРМЫ И КАРТОЧКИ
editProfileButton.addEventListener('click', () => {
  userNameInput.value = userName.textContent;
  userDescriptionInput.value = userProfession.textContent;
  toggleButtonDisabled(popupProfileFormSubmitButton, false, configSelectorForm);
  saveStatus(false, popupProfileFormSubmitButton);
  openPopup(profilePopup);
});

addPlaceButton.addEventListener('click', () => {
  toggleButtonDisabled(popupPlaceFormSubmitButton, formPlaceElement.checkValidity(), configSelectorForm);
  saveStatus(false, popupPlaceFormSubmitButton);
  openPopup(placePopup);
});

editAvatarButton.addEventListener('click', () => {
  toggleButtonDisabled(popupAvatarFormSubmitButton, formAvatarElement.checkValidity(), configSelectorForm);
  saveStatus(false, popupAvatarFormSubmitButton);
  openPopup(avatarPopup);
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


//ОБРАБОТЧИК ПОПАПА ПРОФАЙЛА

// export function handleFormSubmit(evt) {
//   evt.preventDefault();
//   saveStatus(true, popupProfileFormSubmitButton);
//   userName.textContent = userNameInput.value;
//   userProfession.textContent = userDescriptionInput.value;
//   changeUserInfo(userNameInput.value, userDescriptionInput.value);
//   closePopup(profilePopup);
// }


export function handleFormSubmit(evt) {
  evt.preventDefault();
  saveStatus(true, popupProfileFormSubmitButton);
  toggleButtonDisabled(popupProfileFormSubmitButton, false, configSelectorForm);

  changeUserInfo(userNameInput.value, userDescriptionInput.value)
    .then((data) => {
      return defferedFuncPromise(() => {
        userName.textContent = data.name;
        userProfession.textContent = data.about;
      }, 500);
    })
    .catch((res) => console.error(`Ошибка создания карточки: ${res.status}`))
    .finally(() => closePopup(profilePopup));
}


//ОБРАБОТЧИК ПОПАПА АВАТАРА

export function handleFormAvatarSubmit(evt) {
  evt.preventDefault();
  saveStatus(true, popupAvatarFormSubmitButton);
  toggleButtonDisabled(popupAvatarFormSubmitButton, false, configSelectorForm);
  changeUserAvatar(userAvatarInput.value).then(data => {
    return defferedFuncPromise(() => {
      editAvatarButton.src = data.avatar;
      editAvatarButton.alt = data.name;
    }, 500);
  })
  .catch((res) => console.error(`Ошибка создания аватара: ${res.status}`))
  .finally(() => closePopup(avatarPopup))
}


// export function handleFormAvatarSubmit(evt) {
//   evt.preventDefault();
//   saveStatus(true, popupProfileFormSubmitButton)
//   changeUserAvatar(userNameInput.value, userDescriptionInput.value)
//     .then((res) => {
//       editAvatarButton.src = userAvatarInput.value;
//       closePopup(avatarPopup);
//     })
//     .catch((res) => {
//       console.log(`Ошибка создания карточки: ${res.status}`);
//     })
//     .finally(() => {
//       saveStatus(false, popupAvatarFormSubmitButton)
//   })
// }



