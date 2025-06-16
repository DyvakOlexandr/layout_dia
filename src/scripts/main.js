'use strict';
const form = document.getElementById('contact-form');
const input = document.getElementById('email');
const submitButton = document.getElementById('send-button');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
  // Здесь можно добавить код для обработки данных формы
  // ...

  input.value = ''; // Очищаем поле ввода
});
