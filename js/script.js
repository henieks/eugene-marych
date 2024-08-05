// Получаем все элементы ссылок с классом "smooth-scroll"
var links = document.querySelectorAll('.smoothsclr');

// Перебираем все ссылки и добавляем обработчик события "click"
links.forEach(function (link) {
   link.addEventListener('click', function (e) {
      // Отменяем стандартное поведение ссылки
      e.preventDefault();

      // Получаем атрибут href ссылки, на которую был сделан клик
      var href = this.getAttribute('href');

      // Используем метод scrollTo для плавного скролла до элемента с указанным идентификатором
      document.querySelector(href).scrollIntoView({
         behavior: 'smooth'
      });
   });
});