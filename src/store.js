import onChange from 'on-change';
import { messageModes, processingModes } from './modes.js';
import {
  renderFeeds, renderPosts, renderModal, renderInput, renderFeedback,
} from './renderers.js';
import loadFeed from './loaders.js';

const defaultState = {
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

const makeStore = (elements, i18n) => {
  const store = onChange(defaultState, (path, value) => {
    console.log('✅', 'PATH:', path, '- VALUE:', value);

    switch (path) {
      case 'input.text':
      case 'input.disabled':
        renderInput(store, elements);
        break;

      case 'feedback.mode':
      case 'feedback.text':
        renderFeedback(store, elements, i18n);
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
        renderFeeds(store, elements, i18n);
        break;

      case 'posts':
      case 'seenPosts':
        renderPosts(store, elements, i18n);
        break;

      case 'modalPostId':
        renderModal(store, elements);
        break;

      default:
        throw new Error(i18n.t('messages.errorNoPath', { path }));
    }
  });
  return store;
};
export default makeStore;
