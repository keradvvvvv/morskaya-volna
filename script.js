// Год в подвале.
document.getElementById('year').textContent = new Date().getFullYear();
// Кнопка меню доступна мышью, касанием и клавиатурой.
const menuButton = document.querySelector('.burger');
const nav = document.querySelector('.main-nav');
function setMenu(open) {
  nav.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); }
});
window.matchMedia('(max-width: 720px)').addEventListener('change', () => setMenu(false));
// Демонстрация проверки формы без передачи персональных данных.
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements['name'].value.trim();
  if (!name) { form.elements['name'].setCustomValidity('Введите имя.'); form.elements['name'].reportValidity(); return; }
  formStatus.textContent = 'Спасибо, ' + name + '! Форма заполнена корректно. Это демонстрация: заявка не отправлена, данные не сохранены.';
  form.reset();
});
form.elements['name'].addEventListener('input', event => event.target.setCustomValidity(''));
