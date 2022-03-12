import * as yup from 'yup';
import { loadFeed } from './loaders.js';
import { messgeModes, processingModes } from './modes.js';

// eslint-disable-next-line import/prefer-default-export
export const validate = (watchedState, i18n) => {
  const {
    feedback, input, feeds, processing,
  } = watchedState;

  yup.string()
    .required(i18n.t('messages.errorUrlRequired'))
    .matches(
      /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
      i18n.t('messages.errorUrlInvalid'),
    )
    .notOneOf(feeds.map(({ url }) => url), i18n.t('messages.errorRssExist'))
    .validate(input.text)
    .then(() => {
      loadFeed(watchedState, i18n);
    })
    .catch((err) => {
      processing.mode = processingModes.waiting;
      feedback.text = err.message;
      feedback.mode = messgeModes.fail;
    });
};
