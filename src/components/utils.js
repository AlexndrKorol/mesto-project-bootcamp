export const listOfElements = document.querySelector('.elements');

//UX кнопки сабмита
export function saveStatus(isSaved, button) {
  if (isSaved) {
    button.textContent = "Сохранить...";
  } else {
    button.textContent = "Сохранить";
  };
}

//функция отложенная, запрещаем передавать в делей не число.
export function defferedFuncPromise(func, delay) {
  if (isNaN(delay)) {
    throw new Error('delay должен быть числом');
  }

  return new Promise(resolve => {
    setTimeout(() => {
      func();
      resolve();
    }, delay);
  })
}
