'use strict';

/**
 * Рендер финального результата
 * @param wrapper - root элемент виджета
 * @param count - число правильных ответов
 * @param maxCount - из общего числа вопросов
 * @param handle - обработчик клика на кнопку "Пройти еще раз"
 * @param title - заголовок результата
 * @param img - картинка - имя класса
 */
export const renderResult = (wrapper, count, maxCount, handle, title = "", img = "") => {

  const wrap = wrapper.querySelector('.main__wrap');
  wrap.classList.remove('main__wrap--question');
  wrap.classList.add('main__wrap--result', `main__wrap--${img}`);

  const content = wrapper.querySelector('.main__container');
  content.classList.remove('question');
  content.classList.add('result');
  content.textContent = "";

  const counter = document.createElement('div');
  content.classList.add('container__counter');
  counter.textContent = `${count} из ${maxCount} правильных ответов`;

  const titleBox = document.createElement('h2');
  titleBox.classList.add('container__title', 'result__title');
  titleBox.textContent = title;

  content.append(counter, titleBox);

  const social = `
        <div class="container__block result__social">
            <a class="button button-social button-social--fb" href="http://www.facebook.com/sharer.php?u=https://dtf.ru/business" rel="nofollow" target="_blank">Поделиться</a>
            <a class="button button-social button-social--vk" href="http://vkontakte.ru/share.php?url=https://dtf.ru/business" rel="nofollow" target="_blank"></a>
            <a class="button button-social button-social--twitter" href="https://twitter.com/intent/tweet?text=https://dtf.ru/business" rel="nofollow" target="_blank"></a>
            
        </div>
  `;

  const button = document.createElement('button');
  button.classList.add('question__button', 'question__button--next', 'button', 'button__quiz', 'button--retry');
  button.textContent = 'Пройти еще раз';

  button.addEventListener('click', handle);

  content.insertAdjacentHTML('beforeend', social);
  content.append(button);

};