'use strict';

function checkStorage() {
    if (!window.localStorage) {
        return false
    }

    return 'dark' === window.localStorage.getItem('theme')
}

function assessTheme() {
    var classList = document.getElementsByTagName('body')[0].classList
    checkStorage() ? classList.add('dark-theme') : classList.remove('dark-theme')
}

function themeSwitchHandler(e) {
    if (window.localStorage) {
        var theme = checkStorage() ? 'light' : 'dark'
        window.localStorage.setItem('theme', theme)
    }

    assessTheme()
}

function mobileMenuHandler() {
    document.getElementsByClassName('menu-toggle')[0].classList.toggle('active')
    document.getElementById('mobile-menu').classList.toggle('active')
}

var switchers = document.getElementsByClassName('theme-switch')
var mobileMenuButtons = document.getElementsByClassName('menu-toggle')

assessTheme()

for (var i = 0; i < switchers.length; i++) {
   switchers.item(i).addEventListener('click', themeSwitchHandler)
}

for (var i = 0; i < mobileMenuButtons.length; i++) {
  mobileMenuButtons.item(i).addEventListener('click', mobileMenuHandler)
}
