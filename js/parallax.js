const bg = document.querySelector('.bg')
const parallaxStrength = 150

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX
  const mouseY = e.clientY

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  const moveX = (mouseX - centerX) / parallaxStrength
  const moveY = (mouseY - centerY) / parallaxStrength

  bg.style.transform = `translate(${moveX}px, ${moveY}px)`
})