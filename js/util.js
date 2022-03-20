// Задание 2. Функция для проверки максимальной длины строки.
const checkLengthString = (checkedString, maxLength) => checkedString.length <= maxLength;
checkLengthString('Функция для проверки максимальной длины строки', 120);


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makeId = function() {
  let id = '';
  const possibleSymbol = '0123456789';

  for (let i = 0; i < 5; i++) {
    id += possibleSymbol.charAt(Math.floor(Math.random() * possibleSymbol.length));
  }

  return id;
};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export {getRandomArrayElement, makeId, getRandomPositiveInteger, isEscapeKey};
