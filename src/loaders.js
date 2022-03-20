// @ts-check

import axios from 'axios';
import _ from 'lodash';
import * as yup from 'yup';
import { messageModes, processingModes } from './modes.js';
import parseXmlRss from './parser.js';

const timeOut = 5 * 100_000;

const makeOriginUrl = (feedUrl) => {
  const alloriginsUrl = 'https://allorigins.hexlet.app';
  const allOrigin = new URL('/get', alloriginsUrl);
  allOrigin.searchParams.set('url', feedUrl);
  allOrigin.searchParams.set('disableCache', 'true');
  return allOrigin.toString();
};

const getErrorCode = (error) => {
  if (error.isParsingError) return 'messages.errorNotValidRss';
  if (error.isAxiosError) return 'messages.errorNetwork';
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

const update = (store) => {
  const { feeds, posts } = store;

  const feedPromises = feeds.map((feed) => {
    const originUrl = makeOriginUrl(feed.url);
    return axios.get(originUrl)
      .then((rssResponce) => {
        const { data: { contents } } = rssResponce;
        const parsedFeed = parseXmlRss(contents);
        const parsedPosts = parsedFeed.items.map((item) => addFeedId(item, feed.id));
        const storedPosts = store.posts.filter((post) => post.feedId === feed.id);
        const newPosts = _.differenceWith(parsedPosts, storedPosts, (a, b) => a.title === b.title)
          .map(addId);
        posts.unshift(...newPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  Promise.all(feedPromises).finally(() => {
    setTimeout(() => update(store), timeOut);
  });
};

const validate = (url, urls) => yup.string()
  .required()
  .url()
  .notOneOf(urls)
  .validate(url);

const load = (store) => {
  const {
    processing, feedback, posts, feeds, input,
  } = store;

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
      setTimeout(() => update(store), timeOut);
    })
    .catch((err) => {
      feedback.messageCode = getErrorCode(err);
      feedback.mode = messageModes.fail;
      processing.mode = processingModes.waiting;
    });
};

const loadFeed = (store) => {
  const {
    feedback, input, feeds, processing,
  } = store;
  validate(input.text, feeds.map(({ url }) => url))
    .then(() => {
      load(store);
    })
    .catch((err) => {
      const [errorCode] = err.errors;
      processing.mode = processingModes.waiting;
      feedback.messageCode = errorCode;
      feedback.mode = messageModes.fail;
    });
};

export default loadFeed;
