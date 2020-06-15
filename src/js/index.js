import {renderSpecial} from './widget';

const ROOT_SELECTOR = '#quiz-business-news';

const root = document.querySelector(ROOT_SELECTOR);
if (!root) {
  throw Error(ROOT_SELECTOR + ' not found on this page');
}

renderSpecial(root);



