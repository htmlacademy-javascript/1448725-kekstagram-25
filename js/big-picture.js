import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureButtonClose = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const showBigPicture = function (userPicture, userPictureUrl, userPictureComments, userPictureLikes, userPictureDescription) {
  userPicture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img--photo').src = userPictureUrl;
    bigPicture.querySelector('.social__caption').textContent = userPictureDescription;
    bigPicture.querySelector('.likes-count').textContent = userPictureLikes;
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    body.classList.add('modal-open');

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
};

export {showBigPicture};
