'use strict';


/**
 * Приветственная карточка
 * @param root - корневой элемент виджета
 * @param isFeed - в какой формат встраивается
 * @param title - заголовок приветственной карточки
 * @param description - пояснение
 * @param handle - обработчик клика на кнопку "Начало"
 */
export const renderGreeting = (root, isFeed, title, description, handle) => {

  root.textContent = "";
  const mainBlock = document.createElement('div');
  mainBlock.classList.add('main__block');
  if (isFeed) {
    mainBlock.classList.add('is-feed');
  }

  //создаём обёртку
  const wrap = document.createElement('div');
  wrap.classList.add('main__wrap', 'main__wrap--greeting');

  //основной контент
  const content = document.createElement('div');
  content.classList.add('main__content', 'main__greeting', 'greeting');

  //блок с текстом
  const text = document.createElement('div');
  text.classList.add('greeting__text');

  //заголовок
  const titleBlock = document.createElement('h1');
  titleBlock.classList.add('greeting__title');
  titleBlock.textContent = title;

  //описание
  const descriptionBlock = document.createElement('span');
  descriptionBlock.classList.add('greeting__description');
  descriptionBlock.textContent = description;

  //добавим label
  const label = document.createElement('div');
  label.classList.add('greeting__label');

  const labelBox = document.createElement('div');
  labelBox.classList.add('greeting__label-box');

  const labelText = document.createElement('span');
  labelText.classList.add('greeting__label-text');
  labelText.textContent = 'Тест';

  labelBox.append(labelText);
  const labelTail = document.createElement('div');
  labelTail.classList.add('greeting__label-box-tail');

  label.append(labelBox, labelTail);

  text.append(titleBlock, descriptionBlock, label);

  //создаём кнопку
  const btnStart = document.createElement('button');
  btnStart.classList.add('greeting__button', 'button', 'button--start');
  btnStart.textContent = 'Начать';
  btnStart.addEventListener('click', handle);

  content.append(text, btnStart);
  wrap.append(content);

  mainBlock.append(wrap);

  root.append(mainBlock);

};