var copyright = document.querySelector('.footer-copyright > a')

var i = 0
setInterval(() => {
  copyright.style.filter = `hue-rotate(${i}deg)`
  i += 10
  if (i > 360) i = 0
}, 300)
