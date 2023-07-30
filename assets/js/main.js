var copyright = document.querySelector('.footer-copyright > a')

var i = 0
setInterval(() => {
  copyright.style.filter = `hue-rotate(${i}deg)`
  i += 10
  if (i > 360) i = 0
}, 300)

// Toggle Menu
var menuBtnList = document.querySelectorAll('[data-toggle-menu]')

menuBtnList.forEach((btn) => {
  btn.addEventListener('click', () => {
    var menuName = btn.dataset.toggleMenu
    var menu = document.querySelector(`[data-menu=${menuName}]`)

    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
    } else {
      menu.classList.remove('active')

      var hasExistSubMenu = menu.querySelectorAll('[data-menu]').length > 0

      if (hasExistSubMenu) {
        var subMenuList = menu.querySelectorAll('[data-menu]')

        subMenuList.forEach((subMenu) => {
          subMenu.classList.remove('active')
        })
      }
    }
  })
})

var navLinkList = document.querySelectorAll(
  '.nav-mobile .nav-item:not([data-toggle-menu]) .nav-link'
)

navLinkList.forEach((navLink) => {
  navLink.onclick = () => {
    var menu = document.querySelector('[data-menu="nav"]')
    menu.classList.remove('active')
    console.log()
  }
})
