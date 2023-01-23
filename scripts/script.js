const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://images.unsplash.com/photo-1588584922681-745a2223f72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1621278187568-3592f451a74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80'
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1637579178403-65063c4e9ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1619417606952-552a15237367?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1553785063-9e892a3f15b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1636753292114-a3466922583f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Париж',
    link: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Колорадо',
    link: 'https://images.unsplash.com/photo-1600683575273-39de9491d8a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
  },
  {
    name: 'Альпы',
    link: 'https://images.unsplash.com/photo-1509738098174-4002778183da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  }
];

//константы попапа профиля и новой карточки
const popup = document.querySelector('.popup');
const popupOpened = document.querySelector('.popup_opened');

const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const userName = document.querySelector('.profile__name');
const userProfession = document.querySelector('.profile__profession');

const profilePopup = document.querySelector('.popup_profile');
const placePopup = document.querySelector('.popup_place');
const photoPopup = document.querySelector('.popup_photo');

const popupPhotoImage = document.querySelector('.popup__image');
const popupPhotoCaption = document.querySelector('.popup__caption');

const closeProfileButton = profilePopup.querySelector('.popup__close-button');
const closePlaceButton = placePopup.querySelector('.popup__close-button');
const closePhotoButton = photoPopup.querySelector('.popup__close-button');

//открытие попапа формы и попапа фото
editProfileButton.addEventListener('click', () => {
  userNameInput.value = userName.textContent;
  userDescriptionInput.value = userProfession.textContent;
  openPopup(profilePopup);
});

addPlaceButton.addEventListener('click', () => {
  openPopup(placePopup);
});

function openPopup(modalElement) {
  modalElement.classList.add('popup_opened')
}

//закрытие попапа формы и попапа фото
closeProfileButton.addEventListener('click', (event) => {
  closePopup(profilePopup);
});

closePlaceButton.addEventListener('click', (event) => {
  closePopup(placePopup);
});

closePhotoButton.addEventListener('click', (event) => {
  closePopup(photoPopup);
});

function closePopup(modalElement) {
  modalElement.classList.remove('popup_opened');
}

const formElement = profilePopup.querySelector('.popup__form');
const userNameInput = formElement.querySelector('.popup__name');
const userDescriptionInput = formElement.querySelector('.popup__description');

//обработчик попапа формы профайла
function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = userNameInput.value;
    userProfession.textContent = userDescriptionInput.value;
    closePopup(profilePopup);
}

formElement.addEventListener('submit', handleFormSubmit);

//массив из 6 карточек
const listOfElements = document.querySelector('.elements');
const template = document.querySelector('#element-template').content.querySelector('.elements__item');

const formPlaceElement = placePopup.querySelector('.popup__form');
const userNamePlaceInput = formPlaceElement.querySelector('.popup__name');
const userDescriptionPlaceInput = formPlaceElement.querySelector('.popup__description');

function createElement(card) {
  const cardElement = template.cloneNode(true);
  const elementsImage = cardElement.querySelector('.elements__image');
  const elementsTitle = cardElement.querySelector('.elements__item-title');
  const elementsLike = cardElement.querySelector('.elements__like-button');
  const elementsDelete = cardElement.querySelector('.elements__delete-button');

  elementsLike.addEventListener('click', () => {
    if (elementsLike.classList.contains('elements__like-button_active')) {
      elementsLike.classList.remove('elements__like-button_active');
    } else {
      elementsLike.classList.add('elements__like-button_active');
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
    cardElement.remove();
  });

  elementsTitle.textContent = card.name;
  elementsImage.src = card.link;
  elementsImage.alt = card.name;

  return cardElement;
}

initialCards.forEach (function (card) {
  const newCard = createElement(card);
  listOfElements.append(newCard)
})

//добавить новую карточку на страницу
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const newCard = createElement({name: userNamePlaceInput.value, link: userDescriptionPlaceInput.value});
  listOfElements.prepend(newCard);
  closePopup(placePopup);
}

formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);



