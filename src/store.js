// @ts-check

import onChange from 'on-change';
import processingModes from './modes.js';
import {
  renderFeeds, renderPosts, renderModal, renderForm, renderFeedback,
} from './renderers.js';
import loadFeed from './loaders.js';

const makeStore = (state, elements, i18n) => {
  const store = onChange(state, (path, value) => {
    // * хочу оставить этот вывод лога до финала, иначе очень сложно разбирать динамику состояний
    console.log('✅', 'PATH:', path, '- VALUE:', value);

    switch (path) {
      case 'processing.mode':
        switch (value) {
          case processingModes.idle:
            renderForm(store, elements);
            break;

          case processingModes.loading:
            renderForm(store, elements);
            loadFeed(store);
            break;

          case processingModes.success:
            renderFeedback(store, elements, i18n);
            store.uiForm.text = '';
            store.processing.mode = processingModes.idle;
            break;

          case processingModes.error:
            renderFeedback(store, elements, i18n);
            store.processing.mode = processingModes.idle;
            break;

          default:
            throw new Error(`No such mode: ${value}`);
        }
        break;

      case 'feeds':
        renderFeeds(store, elements, i18n);
        break;

      case 'posts':
      case 'seenPosts':
        renderPosts(store, elements, i18n);
        break;

      case 'modalPostId':
        renderModal(store, elements);
        break;

      case 'uiForm.text':
      case 'uiMessage.mode':
      case 'uiMessage.i18nCode':
        break;

      default:
        throw new Error(`No such message state: ${path}`);
    }
  });
  return store;
};
export default makeStore;
