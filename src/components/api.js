export const myUserId = 'f1ef085f39d8035f02e38b76'; //получаем айди от сервера

const config = {
  url: 'https://nomoreparties.co/v1/wbf-cohort-5',
  headers: {
      "authorization": "73a42daa-c9aa-4a24-beec-5a53978226fa",
      "Content-Type": "application/json"
  }
};

//ПРОВЕРЯЕМ ОТВЕТ ЗАПРОСА К СЕРВЕРУ
function answerResponse(res) {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Возникла ошибка: ${res.status}`);
};

// 3. ЗАГРУЖАЕМ ИНФО О ЮЗЕРЕ
export const getUserInfo = () => {
  return fetch(`${config.url}/users/me`, {
    method: "GET",
    headers: config.headers
  })
  .then(answerResponse);
}

// 4. ЗАГРУЖАЕМ КАРТОЧКИ С СЕРВЕРА ВМЕСТО defaultCards (дефолтные удаляем)
export const getAllCards = () => {
  return fetch(`${config.url}/cards`, {
    method: "GET",
    headers: config.headers
  })
  .then(answerResponse);
}

// 5. РЕДАКТИРОВАНИЕ ПРОФИЛЯ ЧЕРЕЗ СЕРВЕР
//тут обновляем данные пользователя и получаем их
export const changeUserInfo = (name, about) => {
  return fetch(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`
    })
  }).then(answerResponse)
}

// console.log(changeUserInfo('Alexndr', 'Car enthusiast')); проверка запроса вручную

// 6. ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
//отправка карточки на сервер
export const addCardServer = (name, link) => {
  return fetch(`${config.url}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`
    })
  }).then(answerResponse)
}

// console.log(addCardServer('test', 'https://images.unsplash.com/photo-1674739835244-5740950bb6ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')); проверка запроса вручную


// 8. УДАЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ СЕРВЕР
export const deleteCardServer = (idCard) => {
  return fetch(`${config.url}/cards/${idCard}`, {
      method: "DELETE",
      headers: config.headers
  })
  .then(answerResponse)
}

//9. ДОБАВЛЕНИЕ ЛАЙКОВ НА СЕРВЕР
export const getLike = (idCard) => {
  return fetch(`${config.url}/cards/likes/${idCard}`, {
    method: "PUT",
    headers: config.headers
  }).then(answerResponse)
}

//УДАЛЕНИЕ ЛАЙКА С СЕРВЕРА
export const deleteLike = (idCard) => {
  return fetch(`${config.url}/cards/likes/${idCard}`, {
    method: "DELETE",
    headers: config.headers
  }).then(answerResponse)
}

//10. ОБНОВЛЕНИЕ АВАТАРА ПОЛЬЗОВАТЕЛЯ
export const changeUserAvatar = (picAvatar) => {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
        avatar: `${picAvatar}`
    })
}).then(answerResponse)
}
