import i18n from 'i18next';
import app from './app.js';
import resources from './locales/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const defaultLanguage = 'ru';
const i18nInst = i18n.createInstance();
i18nInst
  .init({
    lng: defaultLanguage,
    debug: true,
    resources,
  })
  .then(() => app(i18nInst));

export default i18nInst;
