// @ts-check

import onChange from 'on-change';
import { messageModes, processingModes } from './modes.js';
import {
  renderFeeds, renderPosts, renderModal, renderInput, renderFeedback,
} from './renderers.js';
import loadFeed from './loaders.js';

const makeStore = (state, elements, i18n) => {
  const store = onChange(state, (path, value) => {
    // * хочу оставить этот вывод лога до финала, иначе очень сложно разбирать динамику состояний
    console.log('✅', 'PATH:', path, '- VALUE:', value);

    switch (path) {
      case 'input.text':
      case 'input.disabled':
        renderInput(store, elements);
        break;

      case 'feedback.mode':
      case 'feedback.messageCode':
        renderFeedback(store, elements, i18n);
        break;

      case 'processing.mode':
        switch (value) {
          case processingModes.loading:
            store.input.disabled = true;
            loadFeed(store);
            break;

          case processingModes.waiting:
            store.input.disabled = false;
            break;

          default:
            throw new Error(i18n.t('messages.errorNoMode', { value }));
        }
        break;

      case 'feeds':
        store.feedback.messageCode = 'messages.successLoad';
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
