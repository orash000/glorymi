const menu = document.querySelector('.menu')
const menuBtn = document.querySelectorAll('.menu__btn')

// Открытие и закрытие бургер меню
menuBtn.forEach(item => {
  item.addEventListener('click', () => menu.classList.toggle('hidden'))
})