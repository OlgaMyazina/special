'use strict';

/**
 * метод нахождения ссылок в тексте
 * @param text - текст
 * @param links - ссылки, которые нужно найти
 * @returns {*} - возвращает текст с вставленным ссылками в тег a
 */
const findLink = (text, links) => {

  const searchLinks = links;
  let formatText = text;
  searchLinks.forEach(link => {
      formatText = formatText.replace(link.word, `<a href="${link.href}" target="_blank">${link.word}</a>`);
      return formatText;
    }
  );
  return formatText;
};

/**
 * Рендер выбранного ответа и пояснения этому к варианту
 * @param wrapper
 * @param ans
 * @param isCorrect
 * @param links
 */
export const renderAnswer = (wrapper, ans, isCorrect, links) => {

  const answersBlock = wrapper.querySelector('.question__answers');

  if (answersBlock) {
    answersBlock.textContent = '';
  }

  const answer = document.createElement('div');
  answer.classList.add('answer');

  const btn = document.createElement('button');

  const correctClassname = isCorrect ? 'correct' : 'incorrect';

  btn.classList.add('button', `button__answer--${correctClassname}`);
  btn.disabled = true;
  btn.textContent = ans.title;

  answer.append(btn);

  const descriptionBlock = document.createElement('div');
  descriptionBlock.classList.add('answer__description');

  if (ans.description) {
    const descriptionText = findLink(ans.description, links);
    const right = document.createElement('span');
    right.classList.add('answer__right');
    right.insertAdjacentHTML('beforeend', descriptionText);
    descriptionBlock.append(right);
  }

  if (ans.comment) {
    const commentText = findLink(ans.comment, links);
    const comment = document.createElement('span');
    comment.classList.add('answer__comment');
    comment.insertAdjacentHTML('beforeend', commentText);
    descriptionBlock.append(comment);
  }

  const btnNext = wrapper.querySelector('.button--next');
  btnNext.classList.remove('button--hidden');

  answer.append(descriptionBlock);
  answersBlock.append(answer);
};