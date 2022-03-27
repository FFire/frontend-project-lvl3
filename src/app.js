import { processingModes } from './modes.js';
import makeStore from './store.js';

const app = (state, elements, i18n) => {
  const store = makeStore(state, elements, i18n);

  const handleSubmit = (e) => {
    e.preventDefault();
    store.input.text = new FormData(e.target).get('url');
    store.input.mode = processingModes.loading;
  };

  const handlePostClick = (e) => {
    if (!('id' in e.target.dataset)) return;
    const { id } = e.target.dataset;
    store.modalPostId = String(id);
    store.seenPosts.add(id);
  };

  elements.form.addEventListener('submit', handleSubmit);
  elements.postsBox.addEventListener('click', handlePostClick);
};

export default app;
