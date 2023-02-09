import { popupPlaceFormSubmitButton } from "./modal";

export const listOfElements = document.querySelector('.elements');

export const baseUrl = 'https://nomoreparties.co/v1/wbf-cohort-5';

//UX кнопки сабмита
export function saveStatus(isSaved, button) {
  if (isSaved) {
    button.textContent = "Сохранить...";
  } else {
    button === popupPlaceFormSubmitButton ? button.textContent = "Создать" : button.textContent = "Сохранить";
  };
}

//универсальная функция запроса с проверкой ответа
export const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
}

//ПРОВЕРЯЕМ ОТВЕТ ЗАПРОСА К СЕРВЕРУ
function checkResponse(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Возникла ошибка: ${res.status}`);
};

// сброс формы передаем в хэндлер после закрытия попапа
export const resetForm = (form) => {
  form.reset();
}
