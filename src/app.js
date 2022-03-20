import i18next from 'i18next';
import { processingModes } from './modes.js';
import makeStore from './store.js';
import resources from './locales/index.js';
import { elements } from './init.js';

const app = (i18n) => {
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
