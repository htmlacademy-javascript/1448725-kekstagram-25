import {isEscapeKey} from './util.js';
const userPictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureButtonClose = document.querySelector('.big-picture__cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

for (let i=0; i < userPictures.length; i++) {
  userPictures[i].addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img--photo').src = `photos/${i+1}.jpg`;
    bigPicture.querySelector('.social__caption').textContent = userPictures[i].description;
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');
    console.log(userPictures[i]);


    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        bigPicture.classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });
  });

  bigPictureButtonClose.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });
}
