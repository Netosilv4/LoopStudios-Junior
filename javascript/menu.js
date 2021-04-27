let menuHamburguer = document.querySelector('.hamburguerMenu')
let menuList = document.querySelector('.menuList')
menuHamburguer.addEventListener('click', function() {
    if(menuList.style.display == '') {
        menuList.style.display = 'block';
        document.body.style.overflowY = 'hidden'
        menuHamburguer.src = '../images/icon-close.svg'
    }else {
        menuList.style.display = '';
        document.body.style.overflowY = 'scroll'
        menuHamburguer.src = '../images/icon-hamburger.svg'
    }
})