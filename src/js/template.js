'use strict';

/**
 * Создание основной карточки вопроса/ответа
 */
export const renderTemplate = (root, isFeed, handle) => {

  root.textContent = "";

  const mainBlock = document.createElement('div');
  mainBlock.classList.add('main__block');
  if (isFeed){
    mainBlock.classList.add('is-feed');
  }


  //создаём обёртку
  const wrap = document.createElement('div');
  wrap.classList.add('main__wrap', 'main__wrap--question');

  //основной контент
  const content = document.createElement('div');
  content.classList.add('main__content', 'main__container', 'question');
  content.textContent = "";

  wrap.append(content);
  mainBlock.append(wrap);

  const counter = document.createElement('div');
  counter.classList.add('container__counter');

  const title = document.createElement('h1');
  title.classList.add('container__title');

  const answersBlock = document.createElement('div');
  answersBlock.classList.add('container__block', 'question__answers');

  const btnNext = document.createElement('button');
  btnNext.classList.add('button','question__button', 'question__button--next', 'button__quiz', 'button--next');
  btnNext.textContent = "Продолжить";

  btnNext.addEventListener('click', handle);

  content.append(counter, title, answersBlock, btnNext);

  root.append(mainBlock);
};

