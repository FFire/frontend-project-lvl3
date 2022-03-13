import onChange from 'on-change';
import { messgeModes, processingModes } from './modes.js';
import { renderFeeds, renderPosts, renderModal } from './renderers.js';
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
    mode: messgeModes.fail,
  },
  feeds: [],
  posts: [],
  seenPosts: new Set(),
  modalPostId: null,
};

const app = (i18n) => {
  const store = onChange(state, (path, value) => {
    console.log('--------------');
    console.log('path:', path);
    console.log('value:', value);

    switch (path) {
      case 'input.text':
        elements.input.value = value;
        break;

      case 'input.disabled':
        elements.input.disabled = value;
        break;

      case 'feedback.text':
        elements.feedback.textContent = value;
        break;

      case 'feedback.mode':
        elements.feedback.classList.remove('text-danger');
        elements.feedback.classList.remove('text-success');
        if (value === messgeModes.fail) {
          elements.feedback.classList.add('text-danger');
        }
        if (value === messgeModes.success) {
          elements.feedback.classList.add('text-success');
        }
        break;

      case 'processing.mode':
        if (value === processingModes.loading) {
          elements.input.disabled = true;
          elements.submit.disabled = true;
          loadFeed(store, i18n);
        }
        if (value === processingModes.waiting) {
          elements.input.disabled = false;
          elements.submit.disabled = false;
        }
        break;

      case 'feeds':
        store.feedback.text = i18n.t('messages.successLoad');
        store.feedback.mode = messgeModes.success;
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
