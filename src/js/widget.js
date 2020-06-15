'use strict';


import '../css/widget.css';

import data from '../data/data';

import {renderGreeting} from './greeting';
import {renderQuestion} from './question';
import {renderAnswer} from './answer';
import {renderResult} from './result';
import {renderTemplate} from './template';

let state = {
  currentCard: 0,
  currentScore: 0,
};

let isFeed = false;
let root;

export function renderSpecial(blockForWidget) {

  root = blockForWidget;

  const stateLocal = localStorage.getItem('quiz-business-news');
  if (stateLocal) {
    state = JSON.parse(stateLocal);
  } else {
    updateState(state);
  }

  isFeed = root.classList.contains('is-feed');

  if (state.currentCard === 0) {
    renderGreeting(root, isFeed, data.title, data.description, handleStart);

  } else {
    //рендер нужного вопроса:
    renderTemplate(root, isFeed, handleNext);
    const info = getInfoCard();
    renderQuestion(root, info.title, info.answers, info.step, handleAnswer);
  }
}

/**
 * Обновляем state, заданы все параметры по умолчанию
 * @param state - общий state
 * @param currentCard (0) - первая карточка
 * @param currentScore (0) - текущий счёт
 */
const updateState = (state, currentCard = 0, currentScore = 0) => {
  state['currentCard'] = currentCard;
  state['currentScore'] = currentScore;
  localStorage.setItem('quiz-business-news', JSON.stringify(state));
};

/**
 * Метод возвращает строку и описанием шага
 * @returns {string}
 */
const getStep = () => {
  return `${state.currentCard}/${data.questions.length}`;
};

/**
 * Подготовка данных
 * @returns {{currentInfo, getStep()}}
 */
const getInfoCard = () => {
  if (state.currentCard === 0) {
    updateState(state, state.currentCard + 1, state.currentScore);
  }
  const currentInfo = data.questions[state.currentCard - 1];

  return {
    title: currentInfo.title,
    answers: currentInfo.answers,
    step: getStep(),
  }
};

/**
 * первый рендер вопросов - handler для кнопки начать
 */
const handleStart = () => {
  renderTemplate(root, isFeed, handleNext);
  updateState(state, 1, 0);
  const info = getInfoCard();
  renderQuestion(root, info.title, info.answers, info.step, handleAnswer);
};

/**
 * очищаем state и делаем первый рендер вопросов - обработчик по клику на кнопку повторить еще раз, на карточке результатов
 */
const handleRestart = () => {
  //очищаем состояние
  updateState(state, 1, 0);

  renderTemplate(root, isFeed, handleNext);
  const info = getInfoCard();
  renderQuestion(root, info.title, info.answers, info.step, handleAnswer);
};

/**
 * Проверка на правильный ответ
 * @param card - текущая карточка
 * @param answerId - ответ пользователя
 * @returns {boolean}
 */
const checkAnswer = (card, answerId) => {
  return data.questions[card - 1].correctId === parseInt(answerId);
};

/**
 * Выбирали ответ - рендер решения
 */
const handleAnswer = (event) => {

  const answerId = event.target.dataset.answerId;

  const isCorrect = checkAnswer(state.currentCard, answerId);
  if (isCorrect) {
    updateState(state, state.currentCard, state.currentScore + 1);
  }

  const content = document.querySelector('.main__content');
  const currentInfo = data.questions[state.currentCard - 1];
  renderAnswer(content, currentInfo.answers[answerId], isCorrect, currentInfo.links);
};

/**
 * Обработка события продолжения квеста
 */
const handleNext = () => {

  //если последний вопрос,то renderResult, иначе следующий
  updateState(state, state.currentCard + 1, state.currentScore);

  if (state.currentCard <= data.questions.length) {
    const info = getInfoCard();
    renderQuestion(root, info.title, info.answers, info.step, handleAnswer);
    return;
  }

  let result = data.result[data.result.length - 1];
  for (let i = 0; i < data.result.length - 1; i++) {
    if ((data.result[i].maxCount <= state.currentScore) && (data.result[i + 1].maxCount > state.currentScore)) {
      result = data.result[i];
      break;
    }
  }
  renderResult(root, state.currentScore, data.questions.length, handleRestart, result.title, result.img);
  updateState(state);

};








