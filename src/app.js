import i18next from 'i18next';
import * as yup from 'yup';
import { processingModes } from './modes.js';
import makeStore from './store.js';
import resources from './locales/index.js';

const app = (i18n) => {
  yup.setLocale({
    string: {
      url: () => 'messages.errorUrlInvalid',
    },
    mixed: {
      notOneOf: () => 'messages.errorRssExist',
    },
  });

  const elements = {
    form: document.querySelector('form.rss-form'),
    input: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback'),
    submit: document.querySelector('.rss-form button[type="submit"]'),
    feedsBox: document.querySelector('.feeds'),
    postsBox: document.querySelector('.posts'),
    modal: document.querySelector('#modal'),
  };

  const store = makeStore(elements, i18n);

  const handleSubmit = (e) => {
    e.preventDefault();
    store.input.text = new FormData(e.target).get('url');
    store.processing.mode = processingModes.loading;
  };

  const handlePostClick = (e) => {
    if (!('id' in e.target.dataset)) return;
    const { id } = e.target.dataset;
    store.modalPostId = String(id);
    store.seenPosts.add(id);
  };

  elements.form.addEventListener('submit', handleSubmit);
  elements.postsBox.addEventListener('click', handlePostClick);
};

const defaultLanguage = 'ru';
const runApp = () => {
  const i18nInst = i18next.createInstance();
  i18nInst
    .init({
      lng: defaultLanguage,
      debug: true,
      resources,
    })
    .then(() => app(i18nInst));
};

export default runApp;
