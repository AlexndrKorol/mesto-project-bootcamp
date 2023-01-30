import { listOfElements } from "./utils.js";
import { photoPopup, popupPhotoImage, popupPhotoCaption, placePopup } from "./modal.js"
import { userNamePlaceInput, userDescriptionPlaceInput} from "./modal.js"
import { closePopup, openPopup } from "./modal.js";

//6 КАРТОЧЕК ИЗ КОРОБКИ И РЕНДЕР КАРТОЧЕК
const template = document.querySelector('#element-template').content.querySelector('.elements__item');

export function createElement(card) {
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

//ДОБАВИТЬ КАРТОЧКУ НА СТРАНИЦУ
export function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const newCard = createElement({ name: userNamePlaceInput.value, link: userDescriptionPlaceInput.value });
  listOfElements.prepend(newCard);
  closePopup(placePopup);
}


