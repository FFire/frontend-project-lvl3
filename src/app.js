import onChange from 'on-change';
import { messageModes, processingModes } from './modes.js';
import {
  renderFeeds, renderPosts, renderModal, renderInput, renderFeedback,
} from './renderers.js';
import loadFeed from './loaders.js';

const elements = {
  form: document.querySelector('form.rss-form'),
  input: document.querySelector('#url-input'),
  feedback: document.querySelector('.feedback'),
  submit: document.querySelector('.rss-form button[type="submit"]'),
  feedsBox: document.querySelector('.feeds'),
  postsBox: document.querySelector('.posts'),
  modal: document.querySelector('#modal'),
};

const state = {
  processing: {
    mode: processingModes.waiting,
  },
  input: {
    text: '',
    disabled: false,
  },
  feedback: {
    text: '',
    mode: messageModes.fail,
  },
  feeds: [],
  posts: [],
  seenPosts: new Set(),
  modalPostId: null,
};

const app = (i18n) => {
  const store = onChange(state, (path, value) => {
    console.log('✅', 'PATH:', path, '- VALUE:', value);

    switch (path) {
      case 'input.text':
      case 'input.disabled':
        renderInput(store, elements);
        break;

      case 'feedback.mode':
      case 'feedback.text':
        renderFeedback(state, elements, i18n);
        break;

      case 'processing.mode':
        switch (value) {
          case processingModes.loading:
            store.input.disabled = true;
            loadFeed(store, i18n);
            break;

          case processingModes.waiting:
            store.input.disabled = false;
            break;

          default:
            throw new Error(i18n.t('messages.errorNoMode', { value }));
        }
        break;

      case 'feeds':
        store.feedback.text = i18n.t('messages.successLoad');
        store.feedback.mode = messageModes.success;
        store.input.text = '';
        store.processing.mode = processingModes.waiting;
        renderFeeds(state, elements, i18n);
        break;

      case 'posts':
      case 'seenPosts':
        renderPosts(state, elements, i18n);
        break;

      case 'modalPostId':
        renderModal(state, elements);
        break;

      default:
        throw new Error(i18n.t('messages.errorNoPath', { path }));
    }
  });

  const handleInputChange = ({ target: { value: feedUrl } }) => {
    store.input.text = feedUrl;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.processing.mode = processingModes.loading;
  };

  const handlePostClick = (e) => {
    if (!('id' in e.target.dataset)) return;
    const { id } = e.target.dataset;
    store.modalPostId = String(id);
    store.seenPosts.add(id);
  };

  elements.input.addEventListener('input', handleInputChange);
  elements.form.addEventListener('submit', handleSubmit);
  elements.postsBox.addEventListener('click', handlePostClick);
};

export default app;
