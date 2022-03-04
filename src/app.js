import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import onChange from 'on-change';
import * as yup from 'yup';
import { messgeModes, processingModes } from './modes.js';

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
    isFormValid: false,
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
    modalPostId: null,
  };

  const renderFeeds = (st, el, i18nt) => {
    const { feeds } = st;
    const { feedsBox } = el;

    const card = document.createElement('div');
    card.classList.add('card', 'border-0');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);
    const title = document.createElement('h2');
    title.classList.add('card-title', 'h4');
    title.textContent = i18nt('ui.feeds');
    cardBody.appendChild(title);
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'border-0', 'rounded-0');

    const items = feeds.map((feed) => {
      const li = document.createElement('li');
      li.classList.add(
        'list-group-item',
        'border-0',
        'border-end-0',
      );
      const h3 = document.createElement('h3');
      h3.classList.add('h6', 'm-0');
      h3.textContent = feed.title;
      const p = document.createElement('p');
      p.classList.add('m-0', 'small', 'text-black-50');
      p.textContent = feed.description;
      li.append(h3, p);
      return li;
    });

    ul.append(...items);
    card.appendChild(ul);
    feedsBox.innerHTML = '';
    feedsBox.appendChild(card);
  };

  const renderPosts = (st, el, i18nt) => {
    const { posts, seenPosts } = st;
    const { postsBox } = el;

    const card = document.createElement('div');
    card.classList.add('card', 'border-0');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);
    const title = document.createElement('h2');
    title.classList.add('card-title', 'h4');
    title.textContent = i18nt('ui.posts');
    cardBody.appendChild(title);
    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'border-0', 'rounded-0');

    const items = posts.map((post) => {
      const li = document.createElement('li');
      li.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-start',
        'border-0',
        'border-end-0',
      );
      const a = document.createElement('a');
      a.setAttribute('href', post.link);
      const isSeenClass = seenPosts.has(post.id) ? ['fw-normal', 'link-secondary'] : ['fw-bold'];
      a.classList.add(...isSeenClass);
      a.dataset.id = post.id;
      a.textContent = post.title;
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      li.appendChild(a);
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
      button.dataset.id = post.id;
      button.dataset.bsToggle = 'modal';
      button.dataset.bsTarget = '#modal';
      button.textContent = i18nt('ui.preview');
      li.appendChild(button);
      return li;
    });

    ul.append(...items);
    card.appendChild(ul);
    postsBox.innerHTML = '';
    postsBox.appendChild(card);
  };

  const renderModal = (st, el) => {
    const { posts, modalPostId } = st;
    const { modal } = el;

    const post = posts.find(({ id }) => id === modalPostId);
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    const modalArticle = modal.querySelector('.full-article');

    modalTitle.textContent = post.title;
    modalBody.textContent = post.description;
    modalArticle.href = post.link;
  };

  const watchedState = onChange(state, (path, value, prevValue) => {
    console.log('--------------');
    console.log('path:', path);
    console.log('value:', value);
    console.log('prevValue:', prevValue);

    switch (path) {
      case 'input.text':
        elements.input.value = value;
        break;
      case 'input.disabled':
        elements.input.disabled = value;
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

      case 'feedback.text':
        elements.feedback.textContent = value;
        break;

      case 'addButton.disabled':
        elements.addButton.disabled = value;
        break;

      case 'feeds':
        console.log('❤️🚀❤️🚀❤️🚀❤️🚀❤️🚀');
        watchedState.feedback.mode = messgeModes.success;
        watchedState.feedback.text = i18n('messages.successLoad');
        renderFeeds(state, elements, i18n);
        break;

      case 'posts':
      case 'seenPosts':
        renderPosts(state, elements, i18n);
        break;

      case 'modalPostId':
        renderModal(state, elements);
        break;

      case 'processing.error':
        break;

      default:
        throw new Error(i18n('messages.errorNoPath', { path }));
    }
  });

  const validate = (feedUrl, feeds) => {
    yup.string()
      .required(i18n('messages.errorUrlRequired'))
      .matches(
        /(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
        i18n('messages.errorUrlInvalid'),
      )
      .notOneOf(feeds, i18n('messages.errorRssExist'))
      .validate(feedUrl)
      .then(() => {
        watchedState.feedback.mode = messgeModes.success;
      })
      .catch((err) => {
        watchedState.feedback.text = err.message;
        watchedState.feedback.mode = messgeModes.fail;
      });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedUrl = new FormData(e.target).get('url');
    watchedState.processing.mode = processingModes.loading;
    validate(feedUrl, state.feeds.map(({ url }) => url));
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
        watchedState.feedback.text = i18n(getErrorCode(err));
        watchedState.feedback.mode = messgeModes.fail;

        console.error(err);
      });
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
