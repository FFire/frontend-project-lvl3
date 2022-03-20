// @ts-check

import * as yup from 'yup';

yup.setLocale({
  string: {
    url: () => 'messages.errorUrlInvalid',
  },
  mixed: {
    notOneOf: () => 'messages.errorRssExist',
  },
});

// eslint-disable-next-line import/prefer-default-export
export const elements = {
  form: document.querySelector('form.rss-form'),
  input: document.querySelector('#url-input'),
  feedback: document.querySelector('.feedback'),
  submit: document.querySelector('.rss-form button[type="submit"]'),
  feedsBox: document.querySelector('.feeds'),
  postsBox: document.querySelector('.posts'),
  modal: document.querySelector('#modal'),
};
