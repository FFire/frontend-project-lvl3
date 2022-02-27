import axios from 'axios';
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
      // error: null,
    },
    isFormValid: false,
    // error: null,
    input: {
      text: '',
      disabled: false,
    },
    feedback: {
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

      case 'posts':
        break;

      case 'processing.error':
        break;

      default:
        throw new Error(t('messages.errorNoPath', { path }));
    }
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
      })
      .catch((err) => {
        watchedState.feedback.text = err.message;
        watchedState.feedback.mode = messgeModes.fail;
      });
  };

  const handleInputChange = ({ target: { value: feedUrl } }) => {
    watchedState.input.text = feedUrl;
  };

  const makeOriginUrl = (rssUrl) => {
    const alloriginsUrl = 'https://hexlet-allorigins.herokuapp.com';
    const allOrigin = new URL('/get', alloriginsUrl);
    allOrigin.searchParams.set('url', rssUrl);
    allOrigin.searchParams.set('disableCache', 'true');
    return allOrigin.toString();
  };

  const parseXmlRss = (rssBody) => {
    const domParser = new DOMParser().parseFromString(rssBody, 'text/xml');
    const parseError = domParser.querySelector('parsererror');
    if (parseError) {
      const errorObj = new Error(parseError.textContent);
      errorObj.isParsingError = true;
      errorObj.data = rssBody;
      throw errorObj;
    }
    return {
      title: domParser.querySelector('channel > title').textContent,
      description: domParser.querySelector('channel > description').textContent,
      items: [...domParser.querySelectorAll('item')].map((e) => ({
        title: e.querySelector('title').textContent,
        link: e.querySelector('link').textContent,
        description: e.querySelector('description').textContent,
      })),
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const feedUrl = new FormData(e.target).get('url');
    watchedState.processing.mode = processingModes.loading;
    validate(feedUrl, getFeedUrls());
    const originUrl = makeOriginUrl(feedUrl);

    axios.get(originUrl)
      .then((rssResponce) => {
        const { data: { contents } } = rssResponce;
        const parsedFeed = parseXmlRss(contents);
        const feed = {
          url: feedUrl,
          id: _.uniqueId(),
          title: parsedFeed.title,
          description: parsedFeed.description,
        };
        const posts = parsedFeed.items.map((item) => ({
          ...item,
          channelId: feed.id,
          id: _.uniqueId(),
        }));
        watchedState.posts = [...posts, ...watchedState.posts];
        watchedState.feeds = [feed, ...watchedState.feeds];
        watchedState.processing.mode = processingModes.waiting;
        watchedState.processing.error = '';
        // watchedState.error = '';
        watchedState.input.text = '';

        console.log(feed, posts);
      })
      .catch((err) => {
        const getErrorCode = (errorObj) => {
          if (errorObj.isParsingError) return 'messages.errorNotValidRss';
          if (errorObj.isAxiosError) return 'messages.errorNetwork';
          return 'messages.errorUnknown';
        };

        watchedState.processing.mode = processingModes.error;
        watchedState.feedback.text = t(getErrorCode(err));
        watchedState.feedback.mode = messgeModes.fail;

        console.error(err);
      });
  };
  elements.input.addEventListener('input', handleInputChange);
  elements.form.addEventListener('submit', onSubmit);
};

export default app;
