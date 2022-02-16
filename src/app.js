// @ts-check

import 'bootstrap/dist/css/bootstrap.min.css';
import onChange from 'on-change';
import * as yup from 'yup';
import i18n from 'i18next';
import resources from './locales/index.js';
import { inputValidityModes, messgeModes, processingModes } from './modes.js';

const app = (t) => {
  const render = (state, elements) => {
    const { feedback, urlInput } = elements;
    const { mode, text } = state.message;

    feedback.textContent = '';
    urlInput.classList.remove('is-invalid');
    urlInput.classList.remove('text-success');

    switch (mode) {
      case messgeModes.none:
        break;

      case messgeModes.success:
        feedback.textContent = text;
        urlInput.classList.add('text-success');
        break;

      case messgeModes.fail:
        feedback.textContent = text;
        urlInput.classList.add('is-invalid');
        break;

      default:
        throw new Error(t('messages.errorNoMode', { mode }));
    }
  };

  const elements = {
    form: document.querySelector('form'),
    urlInput: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback.text-danger'),
  };

  const state = {
    inputValue: '',
    inputValidity: inputValidityModes.valid,
    processing: processingModes.showContent,
    message: {
      mode: messgeModes.none,
      text: '',
    },

    feeds: [],
  };

  const watchedState = onChange(state, () => { // path, value, previousValue, applyData
    render(state, elements);
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = formData.get('url');
    state.feeds.push(url);
    console.dir(state.feeds);
  };

  const onValidate = (e) => {
    const feedSchema = yup.string()
      .required(t('messages.errorUrlRequired'))
      .matches(
        /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
        t('messages.errorUrlInvalid'),
      )
      .notOneOf(state.feeds, t('messages.errorRssExist'));

    feedSchema.validate(e.target.value)
      .then(() => {
        watchedState.message.text = '';
        watchedState.message.mode = 'none';
      })
      .catch((err) => {
        watchedState.message.text = err.message;
        watchedState.message.mode = 'fail';
      });
  };

  elements.urlInput.addEventListener('input', onValidate);
  elements.form.addEventListener('submit', onSubmit);
};

export default () => {
  const defaultLanguage = 'ru';
  i18n.init({
    lng: defaultLanguage,
    debug: true,
    resources,
  }).then((t) => app(t));
};
