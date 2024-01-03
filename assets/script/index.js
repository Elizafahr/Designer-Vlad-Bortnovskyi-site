/* show more */
window.onload = function () {
  var box = document.getElementsByClassName('portfolio__case')
  var btn = document.getElementById('button')
  var screenWidth = window.innerWidth

  for (let i = 3; i < box.length; i++) {
    box[i].style.display = 'none'
  }

  var countD = 3
  btn.addEventListener('click', function () {
    countD += 3
    for (let i = 0; i < countD; i++) {
      if (screenWidth > 999) {
        box[i].style.display = 'grid'
      } else {
        box[i].style.display = 'flex'
      }
    }
  })
}

/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header__top-row')

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active')
  nav.classList.toggle('header__top-row--mobile')
  document.body.classList.toggle('no-scroll')
}

// Получаем все ссылки списка навигации
const navLinks = document.querySelectorAll('.header__nav li a')

// Добавляем обработчик события при клике на ссылку
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    // Отменяем стандартное поведение ссылки
    event.preventDefault()

    // Получаем id элемента, на который ссылается ссылка
    const targetId = this.getAttribute('href').substring(1)

    // Находим элемент с соответствующим id
    const targetElement = document.getElementById(targetId)

    // Проверяем, что элемент существует
    if (targetElement) {
      // Удаляем класс active у всех ссылок списка навигации
      navLinks.forEach(link => link.classList.remove('active'))

      // Добавляем класс active к текущей ссылке
      this.classList.add('active')

      // Прокручиваем страницу к элементу с помощью метода scrollIntoView
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
