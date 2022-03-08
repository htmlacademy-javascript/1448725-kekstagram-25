import {getRandomPositiveInteger, getRandomArrayElement, makeId} from './util.js';

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

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

const SIMILAR_PHOTOS_COUNT = 25;

const createComment = () => ({
  id: makeId(),
  avatar: `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});


const createPhoto = () => {
  const similarPhotos = [];
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

export {createPhoto};
