import onChange from 'on-change';
import { messgeModes, processingModes } from './modes.js';
import { renderFeeds, renderPosts, renderModal } from './renderers.js';
import { validate } from './validator.js';

const app = (i18n) => {
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
      mode: messgeModes.none,
    },
    feeds: [],
    posts: [],
    seenPosts: new Set(),
    modalPostId: null,
  };

  const watchedState = onChange(state, (path, value) => {
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
        if (value === messgeModes.none) {
          // watchedState.input.validity = validityModes.valid;
        }
        break;

      case 'processing.mode':
        if (value === processingModes.loading) {
          elements.input.disabled = true;
          elements.submit.disabled = true;
        }
        if (value === processingModes.waiting) {
          elements.input.disabled = false;
          elements.submit.disabled = false;
        }
        break;

      case 'feeds':
        watchedState.feedback.mode = messgeModes.success;
        watchedState.feedback.text = i18n.t('messages.successLoad');
        watchedState.processing.mode = processingModes.waiting;
        watchedState.input.text = '';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // const feedUrl = new FormData(e.target).get('url');
    watchedState.processing.mode = processingModes.loading;
    validate(watchedState, i18n);
  };

  const handlePostClick = (e) => {
    if (!('id' in e.target.dataset)) return;
    const { id } = e.target.dataset;
    watchedState.modalPostId = String(id);
    watchedState.seenPosts.add(id);
  };

  const handleInputChange = ({ target: { value: feedUrl } }) => {
    watchedState.input.text = feedUrl;
  };

  elements.input.addEventListener('input', handleInputChange);
  elements.form.addEventListener('submit', handleSubmit);
  elements.postsBox.addEventListener('click', handlePostClick);
};

export default app;
