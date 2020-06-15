## Посмотреть пример работы виджета
- в полной версии
https://olgamyazina.github.io/special/example/example-full.html

- в части страницы
https://olgamyazina.github.io/special/example/example-feed.html

Обратите внимание, что используется localstorage, чтобы продожить квиз позже

## Инструкции по установке

1. Загрузить содержимое каталога `dist` на свой хостинг

2. Вставить на страницу следующий код:

**Для полноэкранного режима**
```
<div class="quiz-business-news" id="quiz-business-news"></div>
```

**Для встривания в ленту (feed режим)**
```
<div class="quiz-business-news is-feed" id="quiz-business-news"></div>
```


## Инструкция для разработки

- Запустить команду:
```
npn install
```
- Для сборки запустить команду build
```
npm run build
```
