import { baseUrl, request } from "./utils";

const config = {
  url: baseUrl,
  headers: {
      "authorization": "73a42daa-c9aa-4a24-beec-5a53978226fa",
      "Content-Type": "application/json"
  }
};

// 3. ЗАГРУЖАЕМ ИНФО О ЮЗЕРЕ
export const getUserInfo = () => {
  return request(`${config.url}/users/me`, {
    method: "GET",
    headers: config.headers
  });
}

// 4. ЗАГРУЖАЕМ КАРТОЧКИ С СЕРВЕРА ВМЕСТО defaultCards (дефолтные удаляем)
export const getAllCards = () => {
  return request(`${config.url}/cards`, {
    method: "GET",
    headers: config.headers
  });
}

// 5. РЕДАКТИРОВАНИЕ ПРОФИЛЯ ЧЕРЕЗ СЕРВЕР
//тут обновляем данные пользователя и получаем их
export const changeUserInfo = (name, about) => {
  return request(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`
    })
  });
}

// 6. ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
//отправка карточки на сервер
export const addCardServer = (name, link) => {
  return request(`${config.url}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`
    })
  });
}

// 8. УДАЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ СЕРВЕР
export const deleteCardServer = (idCard) => {
  return request(`${config.url}/cards/${idCard}`, {
      method: "DELETE",
      headers: config.headers
  });
}

//9. ДОБАВЛЕНИЕ ЛАЙКОВ НА СЕРВЕР
export const getLike = (idCard) => {
  return request(`${config.url}/cards/likes/${idCard}`, {
    method: "PUT",
    headers: config.headers
  });
}

//УДАЛЕНИЕ ЛАЙКА С СЕРВЕРА
export const deleteLike = (idCard) => {
  return request(`${config.url}/cards/likes/${idCard}`, {
    method: "DELETE",
    headers: config.headers
  });
}

//10. ОБНОВЛЕНИЕ АВАТАРА ПОЛЬЗОВАТЕЛЯ
export const changeUserAvatar = (picAvatar) => {
  return request(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
        avatar: `${picAvatar}`
    })
});
}
