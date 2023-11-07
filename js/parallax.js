const bg = document.querySelector('.bg')

document.addEventListener('mousemove', (e) => {
  const parallaxStrength = 90

  const mouseX = e.clientX
  const mouseY = e.clientY

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  const moveX = (mouseX - centerX) / parallaxStrength
  const moveY = (mouseY - centerY) / parallaxStrength

  bg.style.transform = `translate(${moveX}px, ${moveY}px)`
})

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0]
  const parallaxStrength = 50

  if (touch) {
    const touchX = touch.clientX
    const touchY = touch.clientY

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    const moveX = (touchX - centerX) / parallaxStrength
    const moveY = (touchY - centerY) / parallaxStrength

    bg.style.transform = `translate(${moveX}px, ${moveY}px)`
  }
})