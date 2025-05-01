const formButton = document.querySelector('.form__button');
const emailLabel = document.querySelector('label[for="email"]');
const phoneLabel = document.querySelector('label[for="phone"]');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Функция для скрытия label и показа placeholder при фокусе
const handleFocus = (input, label) => {
  input.addEventListener('focus', () => {
    label.classList.add('visually-hidden'); // Скрываем label
    input.placeholder = input.getAttribute('placeholder'); // Убедимся, что placeholder виден
  });

  input.addEventListener('blur', () => {
    if (input.value.trim() === '') {
      label.classList.remove('visually-hidden'); // Показываем label, если поле пустое
    }
  });
};

const formValid = () => {
  // Применяем обработчики фокуса к полям
  handleFocus(email, emailLabel);
  handleFocus(phone, phoneLabel);

  formButton.addEventListener('click', (evt) => {
    // Проверка email
    if (email.validity.valueMissing) {
      email.setCustomValidity('Пожалуйста, введите Email');
      email.classList.add('input-error');
      evt.preventDefault();
    } else if (email.validity.patternMismatch || !email.value.includes('.')) {
      email.setCustomValidity('Введите корректный email, например: example@домен.рф');
      email.classList.add('input-error');
      evt.preventDefault();
    } else {
      email.setCustomValidity('');
      email.classList.remove('input-error');
    }
    email.reportValidity();

    // Проверка телефона
    if (phone.validity.valueMissing) {
      phone.setCustomValidity('Пожалуйста, введите номер телефона');
      phone.classList.add('input-error');
      evt.preventDefault();
    } else if (phone.validity.patternMismatch) {
      phone.setCustomValidity('Введите корректный номер телефона');
      phone.classList.add('input-error');
      evt.preventDefault();
    } else {
      phone.setCustomValidity('');
      phone.classList.remove('input-error');
    }
    phone.reportValidity();
  });

  // Обработчики для скрытия ошибок при вводе
  email.addEventListener('input', () => {
    if (email.validity.valid) {
      email.classList.remove('input-error');
      email.setCustomValidity('');
    }
  });

  phone.addEventListener('input', () => {
    if (phone.validity.valid) {
      phone.classList.remove('input-error');
      phone.setCustomValidity('');
    }
  });
};

export { formValid };
