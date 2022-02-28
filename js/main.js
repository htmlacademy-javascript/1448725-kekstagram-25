// Задание 1. Функция, возвращающая случайное целое число из переданного диапазона включительно. Использован пример из https://learn.javascript.ru/task/random-int-min-max
const getRandom = function (num1, num2) {
  if (num1 >= 0 && num2 > num1) {
    const rand = num1 - 0.5 + Math.random() * (num2 - num1 + 1);
    return Math.round(rand);
  }
  return false;
};

getRandom(8, 8);

// Задание 2. Функция для проверки максимальной длины строки.
const checkLengthString = (checkedString, maxLength) => checkedString.length <= maxLength;

checkLengthString('Функция для проверки максимальной длины строки', 120);

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const NAMES = [
  'Паоло',
  'Душан',
  'Леонардо',
  'Джорджо',
  'Матейс',
  'Войцех',
  'Федерико',
  'Адриан',
];

const DESCRIPTIONS = [
  'Красивый закат',
  'Я держу Пизанскую башню',
  'Завтрак',
  'Великолепный замок',
  'Отпуск в горах',
  'Велопоход',
  'Пробежка в лесу',
  'Морское побережье',
  'Милые еноты',
  'Котики',
];

const similarPhotos = [];
const SIMILAR_PHOTOS_COUNT = 25;

const createComment = () => ({
  id: '1', // случайное число. Идентификаторы не должны повторяться.
  avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});


const createPhoto = () => {
  for (let j = 1; j <= SIMILAR_PHOTOS_COUNT; j++) {
    const commentsList = [];
    for (let i = 1; i <= getRandomPositiveInteger(1, 4); i++) {
      commentsList.push(createComment());
    }
    similarPhotos.push({
      id: j,
      url: `photos/${j}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(15, 200),
      comments: commentsList,
    });
  }
  return similarPhotos;
};

createPhoto();
