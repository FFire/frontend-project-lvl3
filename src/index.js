// @ts-check

import i18n from 'i18next';
import app from './app.js';
import resources from './locales/index.js';

const defaultLanguage = 'ru';
i18n.init({
  lng: defaultLanguage,
  debug: true,
  resources,
}).then((t) => app(t));
