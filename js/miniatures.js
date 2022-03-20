import {createPhoto} from './data.js';
import {showBigPicture} from './big-picture.js';
const userPicturesContainer = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPictures = createPhoto();
const userPicturesFragment = document.createDocumentFragment();
userPictures.forEach(({url, comments, likes, description}) => {
  const simpleUserPicture = userPictureTemplate.cloneNode(true);
  simpleUserPicture.querySelector('.picture__img').src = url;
  simpleUserPicture.querySelector('.picture__comments').textContent = comments.length;
  simpleUserPicture.querySelector('.picture__likes').textContent = likes;
  showBigPicture(simpleUserPicture, url, comments, likes, description);
  userPicturesFragment.appendChild(simpleUserPicture);
});

userPicturesContainer.appendChild(userPicturesFragment);
