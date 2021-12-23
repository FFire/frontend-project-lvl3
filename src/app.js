import 'bootstrap/dist/css/bootstrap.min.css';
import onChange from 'on-change';
import * as yup from 'yup';
import i18n from 'i18next';
import resources from './locales/index.js';

const app = (i18nInst) => {
  const render = (state, elements) => {
    const { feedback, urlInput } = elements;
    const { mode, text } = state.message;

    feedback.textContent = '';
    urlInput.classList.remove('is-invalid');
    urlInput.classList.remove('text-success');

    switch (mode) {
      case 'none':
        break;

      case 'success':
        feedback.textContent = text;
        urlInput.classList.add('text-success');
        break;

      case 'fail':
        feedback.textContent = text;
        urlInput.classList.add('is-invalid');
        break;

      default:
        throw new Error(`No such message mode: ${mode}`);
    }
  };

  const elements = {
    form: document.querySelector('form'),
    urlInput: document.querySelector('#url-input'),
    feedback: document.querySelector('.feedback.text-danger'),
  };

  const state = {
    message: { mode: 'none', text: '' }, // mode: ['none', 'success', 'fail']
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
      .required('URL is required')
      .matches(
        /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
        'Ссылка должна быть валидным URL',
      )
      .notOneOf(state.feeds, 'RSS уже существует');

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

export default async () => {
  const defaultLanguage = 'ru';
  const i18nInst = i18n.createInstance();
  await i18nInst.init({
    lng: defaultLanguage,
    debug: true,
    resources,
  });

  app(i18nInst);
};
