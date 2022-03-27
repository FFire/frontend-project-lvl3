// @ts-check

import i18next from 'i18next';
import * as yup from 'yup';
import app from './app.js';
import { messageModes, processingModes } from './modes.js';
import resources from './locales/index.js';

export const initYup = () => {
  yup.setLocale({
    string: {
      url: () => 'messages.errorUrlInvalid',
    },
    mixed: {
      notOneOf: () => 'messages.errorRssExist',
    },
  });
};

export const getElements = () => ({
  form: document.querySelector('form.rss-form'),
  input: document.querySelector('#url-input'),
  feedback: document.querySelector('.feedback'),
  submit: document.querySelector('.rss-form button[type="submit"]'),
  feedsBox: document.querySelector('.feeds'),
  postsBox: document.querySelector('.posts'),
  modal: document.querySelector('#modal'),
});

export const getDefaultState = () => ({
  uiForm: {
    text: '',
    disabled: false,
    mode: processingModes.ready,
  },
  uiMessage: {
    i18nCode: '',
    mode: messageModes.fail,
  },
  feeds: [],
  posts: [],
  seenPosts: new Set(),
  modalPostId: null,
});

const init = () => {
  initYup();
  const i18nInst = i18next.createInstance();
  i18nInst
    .init({ lng: 'ru', debug: true, resources })
    .then(() => app(getDefaultState(), getElements(), i18nInst));
};

export default init;
