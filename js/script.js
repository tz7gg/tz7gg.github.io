const nav = document.querySelector('.header-nav-navigation-ul')
const burger = document.querySelector('.header-nav-burger')
const body = document.querySelector('body')


burger.addEventListener('click', function() {
    nav.classList.toggle('nav-active')
    if (burger.children[0].getAttribute('src') == 'img/burger.png') {
        body.style.overflowY = 'hidden'
        burger.children[0].setAttribute('src', 'img/whiteburger.png')
    } else {
        body.style.overflowY = ''
        burger.children[0].setAttribute('src', 'img/burger.png')
    }
})