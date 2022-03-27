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
      case 'uiForm.text':
      case 'uiForm.disabled':
        renderInput(store, elements);
        break;

      case 'uiMessage.mode':
      case 'uiMessage.i18nCode':
        renderFeedback(store, elements, i18n);
        break;

      case 'uiForm.mode':
        switch (value) {
          case processingModes.loading:
            store.uiForm.disabled = true;
            loadFeed(store);
            break;

          case processingModes.ready:
            store.uiForm.disabled = false;
            break;

          default:
            throw new Error(i18n.t('messages.errorNoMode', { value }));
        }
        break;

      case 'feeds':
        store.uiMessage.i18nCode = 'messages.successLoad';
        store.uiMessage.mode = messageModes.success;
        store.uiForm.text = '';
        store.uiForm.mode = processingModes.ready;
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
