import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import onChange from 'on-change';
import * as yup from 'yup';
import { messgeModes, processingModes } from './modes.js';

const app = (t) => {
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
      error: null,
    },
    isFormValid: false,
    error: null,
    input: {
      text: '',
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
    posts: [],
    seenPosts: new Set(),
    modal: { postId: null },
  };

  const getFeedUrls = () => state.feeds.map(({ url }) => url);

  const watchedState = onChange(state, (path, value, prevValue) => {
    // render(state, elements);
    console.log('--------------');
    console.log('path:', path);
    console.log('value:', value);
    console.log('prevValue:', prevValue);

    switch (path) {
      // case path.match(/input/)?.input:
      //   console.log('🚀🚀🚀🚀');
      //   break;

      case 'input.text':
        elements.input.value = value;
        break;
      case 'input.disabled':
        elements.input.disabled = value;
        break;
        // case 'input.validity':
        //   if (value === validityModes.invalid) {
        //     // elements.input.classList.add('is-invalid');
        //     // watchedState.addButton.disabled = true;
        //   }
        //   if (value === validityModes.valid) {
        //     // elements.input.classList.add('text-success');
        //     // watchedState.addButton.disabled = false;
        //   }
        //   break;

      case 'message.mode':
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

      case 'feedback.text':
        elements.feedback.textContent = value;
        break;

      case 'addButton.disabled':
        elements.addButton.disabled = value;
        break;

      case 'feeds':
        console.log('❤️🚀❤️🚀❤️🚀❤️🚀❤️🚀');
        watchedState.feedback.mode = messgeModes.success;
        watchedState.feedback.text = t('messages.successLoad');
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
        watchedState.feedback.mode = messgeModes.success;
        // watchedState.input.validity = validityModes.valid;
      })
      .catch((err) => {
        watchedState.feedback.text = err.message;
        watchedState.feedback.mode = messgeModes.fail;
        // watchedState.input.validity = validityModes.invalid;
      });
  };

  const handleInputChange = ({ target: { value: feedUrl } }) => {
    watchedState.input.text = feedUrl;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const feedUrl = formData.get('url');
    const feed = makeFeed(feedUrl);
    validate(feedUrl, getFeedUrls());
    watchedState.feeds.push(feed);
  };
  elements.input.addEventListener('input', handleInputChange);
  elements.form.addEventListener('submit', onSubmit);
};

export default app;
