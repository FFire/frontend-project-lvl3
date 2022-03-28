// @ts-check

import onChange from 'on-change';
import { messageModes, processingModes } from './modes.js';
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
            store.uiForm.disabled = false;
            renderForm(store, elements);
            break;

          case processingModes.loading:
            store.uiForm.disabled = true;
            loadFeed(store);
            break;

          case processingModes.success:
            store.uiMessage.mode = messageModes.success;
            store.uiMessage.i18nCode = 'messages.successLoad';
            renderFeedback(store, elements, i18n);
            store.uiForm.text = '';
            store.processing.mode = processingModes.idle;
            break;

          case processingModes.error:
            store.uiMessage.mode = messageModes.error;
            renderFeedback(store, elements, i18n);
            store.processing.mode = processingModes.idle;
            break;

          default:
            throw new Error(i18n.t('messages.errorNoMode', { value }));
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
      case 'uiForm.disabled':
      case 'uiMessage.mode':
      case 'uiMessage.i18nCode':
        break;

      default:
        throw new Error(i18n.t('messages.errorNoPath', { path }));
    }
  });
  return store;
};
export default makeStore;
