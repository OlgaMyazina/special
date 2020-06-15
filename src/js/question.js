'use strict';

/**
 * Блок вопроса с вариантами ответов на него
 * @param wrapper - root элемент виджета
 * @param title - текст вопроса
 * @param answers - варианты ответа
 * @param step - строка с описанием шага
 * @param handle - обработчик клика на вариант ответа
 */
export const renderQuestion = (wrapper, title, answers, step, handle) => {

  const answersBlock = wrapper.querySelector('.question__answers');
  if (answersBlock) {
    answersBlock.textContent = '';
  }

  const counter = wrapper.querySelector('.container__counter');
  counter.textContent = step;

  const titleBlock = wrapper.querySelector('.container__title');
  titleBlock.textContent = title;

  const answer = document.createElement('div');
  answer.classList.add('questions__answers');

  answers.map(a => {
    const btn = document.createElement('button');
    btn.classList.add('question__button', 'button', 'button__answer', 'button--value');
    btn.dataset.answerId = a.id;
    btn.textContent = a.title;
    btn.addEventListener('click', handle);

    answer.append(btn);
  });

  const btnNext = wrapper.querySelector('.button--next');
  btnNext.classList.add('button--hidden');

  answersBlock.append(answer);
};
