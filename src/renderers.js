import { messageModes } from './modes.js';

export const renderFeeds = (store, elements, i18n) => {
  const { feeds } = store;
  const { feedsBox } = elements;

  const card = document.createElement('div');
  card.classList.add('card', 'border-0');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);
  const title = document.createElement('h2');
  title.classList.add('card-title', 'h4');
  title.textContent = i18n.t('ui.feeds');
  cardBody.appendChild(title);
  const ul = document.createElement('ul');
  ul.classList.add('list-group', 'border-0', 'rounded-0');

  const feedItems = feeds.map((feed) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'border-0', 'border-end-0');
    const h3 = document.createElement('h3');
    h3.classList.add('h6', 'm-0');
    h3.textContent = feed.title;
    const p = document.createElement('p');
    p.classList.add('m-0', 'small', 'text-black-50');
    p.textContent = feed.description;
    li.append(h3, p);
    return li;
  });

  ul.append(...feedItems);
  card.appendChild(ul);
  feedsBox.innerHTML = '';
  feedsBox.appendChild(card);
};

export const renderPosts = (store, elements, i18n) => {
  const { posts, seenPosts } = store;
  const { postsBox } = elements;

  const card = document.createElement('div');
  card.classList.add('card', 'border-0');
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);
  const title = document.createElement('h2');
  title.classList.add('card-title', 'h4');
  title.textContent = i18n.t('ui.posts');
  cardBody.appendChild(title);
  const ul = document.createElement('ul');
  ul.classList.add('list-group', 'border-0', 'rounded-0');

  const postItems = posts.map((post) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
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
    button.textContent = i18n.t('ui.preview');
    li.appendChild(button);
    return li;
  });

  ul.append(...postItems);
  card.appendChild(ul);
  postsBox.innerHTML = '';
  postsBox.appendChild(card);
};

export const renderModal = (store, elements) => {
  const { posts, modalPostId } = store;
  const { modal } = elements;

  const post = posts.find(({ id }) => id === modalPostId);
  const modalTitle = modal.querySelector('.modal-title');
  const modalBody = modal.querySelector('.modal-body');
  const modalArticle = modal.querySelector('.full-article');

  modalTitle.textContent = post.title;
  modalBody.textContent = post.description;
  modalArticle.href = post.link;
};

export const renderInput = (store, elements) => {
  const { input: { text, disabled } } = store;
  const { input, submit } = elements;

  input.value = text;
  input.disabled = disabled;
  submit.disabled = disabled;
};

export const renderFeedback = (store, elements, i18n) => {
  const { feedback: { text, mode } } = store;
  const { feedback } = elements;

  feedback.textContent = text;
  feedback.classList.remove('text-danger');
  feedback.classList.remove('text-success');
  switch (mode) {
    case messageModes.fail:
      feedback.classList.add('text-danger');
      break;

    case messageModes.success:
      feedback.classList.add('text-success');
      break;

    default:
      throw new Error(i18n.t('messages.errorNoMode', { mode }));
  }
};
