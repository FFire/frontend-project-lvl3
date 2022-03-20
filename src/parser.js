// @ts-check

const parseXmlRss = (rssBody) => {
  const domParser = new DOMParser().parseFromString(rssBody, 'text/xml');
  const parseError = domParser.querySelector('parsererror');
  if (parseError) {
    const errorObj = new Error(parseError.textContent);
    errorObj.isParsingError = true;
    // errorObj.data = rssBody;
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

export default parseXmlRss;
