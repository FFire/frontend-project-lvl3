import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import onChange from 'on-change';
import * as yup from 'yup';
import { validityModes, messgeModes, processingModes } from './modes.js';

const app = (t) => {
  const elements = {
    form: document.querySelector('form'),
    urlInput: document.querySelector('#url-input'),
    message: document.querySelector('.feedback'),
    addButton: document.querySelector('button[type="submit"]'),
  };

  const state = {
    processing: processingModes.showContent,
    urlInput: {
      text: '',
      // validity: validityModes.valid,
      disabled: false,
    },
    message: {
      text: '',
      mode: messgeModes.none,
    },
    addButton: {
      disabled: false,
    },
    feeds: [],
  };

  const getFeedUrls = () => state.feeds.map(({ url }) => url);

  const watchedState = onChange(state, (path, value, prevValue) => {
    // render(state, elements);
    console.log('--------------');
    console.log('path:', path);
    console.log('value:', value);
    console.log('prevValue:', prevValue);

    switch (path) {
      // case path.match(/urlInput/)?.input:
      //   console.log('🚀🚀🚀🚀');
      //   break;

      case 'urlInput.text':
        elements.urlInput.value = value;
        break;
      case 'urlInput.disabled':
        elements.urlInput.disabled = value;
        break;
        // case 'urlInput.validity':
        //   if (value === validityModes.invalid) {
        //     // elements.urlInput.classList.add('is-invalid');
        //     // watchedState.addButton.disabled = true;
        //   }
        //   if (value === validityModes.valid) {
        //     // elements.urlInput.classList.add('text-success');
        //     // watchedState.addButton.disabled = false;
        //   }
        //   break;

      case 'message.mode':
        elements.message.classList.remove('text-danger');
        elements.message.classList.remove('text-success');
        if (value === messgeModes.fail) {
          elements.message.classList.add('text-danger');
        }
        if (value === messgeModes.success) {
          elements.message.classList.add('text-success');
        }
        if (value === messgeModes.none) {
          // watchedState.urlInput.validity = validityModes.valid;
        }
        break;

      case 'message.text':
        elements.message.textContent = value;
        break;

      case 'addButton.disabled':
        elements.addButton.disabled = value;
        break;

      case 'feeds':
        console.log('❤️🚀❤️🚀❤️🚀❤️🚀❤️🚀');
        watchedState.message.mode = messgeModes.success;
        watchedState.message.text = t('messages.successLoad');
        break;

      default:
        throw new Error(t('messages.errorNoPath', { path }));
    }
  });

  const makeFeed = (url) => ({
    key: _.uniqueId(),
    url,
    visited: false,
  });

  const validate = (feedUrl, feeds) => {
    yup.string()
      .required(t('messages.errorUrlRequired'))
      .matches(
        /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
        t('messages.errorUrlInvalid'),
      )
      .notOneOf(feeds, t('messages.errorRssExist'))
      .validate(feedUrl)
      .then(() => {
        watchedState.message.mode = messgeModes.success;
        // watchedState.urlInput.validity = validityModes.valid;
      })
      .catch((err) => {
        watchedState.message.text = err.message;
        watchedState.message.mode = messgeModes.fail;
        // watchedState.urlInput.validity = validityModes.invalid;
      });
  };

  const handleInputChange = ({ target: { value: feedUrl } }) => {
    watchedState.urlInput.text = feedUrl;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const feedUrl = formData.get('url');
    const feed = makeFeed(feedUrl);
    validate(feedUrl, getFeedUrls());
    watchedState.feeds.push(feed);
  };
  elements.urlInput.addEventListener('input', handleInputChange);
  elements.form.addEventListener('submit', onSubmit);
};

export default app;
