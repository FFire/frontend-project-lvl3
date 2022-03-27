import { formModes } from './modes.js';
import makeStore from './store.js';

const app = (state, elements, i18n) => {
  const store = makeStore(state, elements, i18n);

  const handleSubmit = (e) => {
    e.preventDefault();
    store.uiForm.text = new FormData(e.target).get('url');
    store.uiForm.mode = formModes.loading;
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
