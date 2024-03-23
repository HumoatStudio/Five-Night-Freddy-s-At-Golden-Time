document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // предотвращаем отправку формы

  // Получаем значения из полей ввода
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Ваша логика регистрации здесь
  // Например, можно использовать AJAX запрос к серверу для отправки данных и получения ответа
  
  // После успешной регистрации перенаправляем пользователя на следующую страницу
  window.location.href = 'index.html'; // Замените 'next_page.html' на адрес следующей страницы
});
