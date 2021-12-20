// import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import onChange from 'on-change';
import * as yup from 'yup';

const feedSchema = yup.string()
  .required('URL is required')
  .matches(/(https?:\/\/)?([\w-])+\.{1}([a-zA-Z]{2,63})([/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/, 'Ссылка должна быть валидным URL');

const render = (state, elements) => {
  const { feedback, urlInput } = elements;
  feedback.textContent = state.error;
  if (state.error) {
    urlInput.classList.add('is-invalid');
  } else {
    urlInput.classList.remove('is-invalid');
  }
};

const elements = {
  urlInput: document.querySelector('#url-input'),
  feedback: document.querySelector('.feedback.text-danger'),
};

const state = {
  error: '',
  feeds: [],
};

const watchedState = onChange(state, (path, value, previousValue, applyData) => {
  render(state, elements);
});

const onUpdate = (e) => {
  watchedState.error = e.target.value;
  feedSchema.validate(e.target.value).catch((err) => {
    console.dir(err.message);
  });
  // console.log(e.target.value);
};

elements.urlInput.addEventListener('input', onUpdate);
