// @ts-check

export default {
  translation: {
    languages: {
      en: 'English',
      ru: 'Русский',
    },
    ui: {
      h1: 'RSS aggregator',
      h2: "Start reading RSS today! It's easy, it's beautiful.",
      inputPlaceholder: 'RSS link',
      button: 'Add',
      example: 'Example: https://ru.hexlet.io/lessons.rss',
      posts: 'Posts',
      feeds: 'Feeds',
    },
    messages: {
      successLoad: 'RSS successfully uploaded',
      errorUrlRequired: 'You have to enter the URL',
      errorRssExist: 'RSS already exists',
      errorNotEmpty: "Shouldn't be empty",
      errorNotValidRss: 'Resource does not contain valid RSS',
      errorUrlInvalid: 'The link must be a valid URL',
      errorNetwork: 'Network error',
      errorNoMode: 'No such message mode: {{mode}}',
    },
  },
};
