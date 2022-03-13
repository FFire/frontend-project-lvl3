import axios from 'axios';
import _ from 'lodash';
import * as yup from 'yup';
import { messgeModes, processingModes } from './modes.js';
import parseXmlRss from './parser.js';

const timeOut = 5 * 60 * 1000;

const makeOriginUrl = (feedUrl) => {
  const alloriginsUrl = 'https://hexlet-allorigins.herokuapp.com';
  const allOrigin = new URL('/get', alloriginsUrl);
  allOrigin.searchParams.set('url', feedUrl);
  allOrigin.searchParams.set('disableCache', 'true');
  return allOrigin.toString();
};

const getErrorCode = (errorObj) => {
  if (errorObj.isParsingError) return 'messages.errorNotValidRss';
  if (errorObj.isAxiosError) return 'messages.errorNetwork';
  return 'messages.errorUnknown';
};

const makeFeed = (url, { title, description }) => ({
  id: _.uniqueId(),
  url,
  title,
  description,
});

const addFeedId = (item, feedId) => ({ ...item, feedId });

const addId = (item) => ({ ...item, id: _.uniqueId() });

const update = (watchedState) => {
  console.log('--- update feeds ---');
  const { feeds, posts } = watchedState;

  const feedPromises = feeds.map((feed) => {
    const originUrl = makeOriginUrl(feed.url);
    return axios.get(originUrl)
      .then((rssResponce) => {
        const { data: { contents } } = rssResponce;
        const parsedFeed = parseXmlRss(contents);
        const parsedPosts = parsedFeed.items.map((item) => addFeedId(item, feed.id));
        const storedPosts = watchedState.posts.filter((post) => post.feedId === feed.id);
        const newPosts = _.differenceWith(parsedPosts, storedPosts, (a, b) => a.title === b.title)
          .map(addId);
        posts.unshift(...newPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  Promise.all(feedPromises).finally(() => {
    setTimeout(() => update(watchedState), timeOut);
  });
};

const load = (watchedState, i18n) => {
  const {
    processing, feedback, posts, feeds, input,
  } = watchedState;

  const originUrl = makeOriginUrl(input.text);
  axios.get(originUrl)
    .then((rssResponce) => {
      const { data: { contents } } = rssResponce;
      const parsedFeed = parseXmlRss(contents);
      const newFeed = makeFeed(input.text, parsedFeed);
      const newPosts = parsedFeed.items
        .map((item) => addFeedId(item, newFeed.id))
        .map(addId);
      posts.unshift(...newPosts);
      feeds.push(newFeed);
      setTimeout(() => update(watchedState), timeOut);
    })
    .catch((err) => {
      feedback.text = i18n.t(getErrorCode(err));
      feedback.mode = messgeModes.fail;
      processing.mode = processingModes.waiting;

      console.error(err);
    });
};

const loadFeed = (watchedState, i18n) => {
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
      load(watchedState, i18n);
    })
    .catch((err) => {
      processing.mode = processingModes.waiting;
      feedback.text = err.message;
      feedback.mode = messgeModes.fail;
    });
};

export default loadFeed;
