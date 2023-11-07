const bg = document.querySelector('.bg')

// Эффект параллакса с помощью мыши
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

// Эффект параллакса с помощью движения пальцев
// document.addEventListener('touchmove', (e) => {
//   const touch = e.touches[0]
//   const parallaxStrength = 30

//   if (touch) {
//     const touchX = touch.clientX
//     const touchY = touch.clientY

//     const centerX = window.innerWidth / 2
//     const centerY = window.innerHeight / 2

//     const moveX = (touchX - centerX) / parallaxStrength
//     const moveY = (touchY - centerY) / parallaxStrength

//     bg.style.transform = `translate(${moveX}px, ${moveY}px)`
//   }
// })

// Эффект параллакса с помощью гироскопа
if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', handleOrientation)
} else {
  console.log('Гироскоп не поддерживается на этом устройстве.')
  alert("Гироскоп не поддерживается")
}

function handleOrientation(event) {
  const beta = event.beta
  const gamma = event.gamma
  const parallaxStrength = 10

  bg.style.transform = `translate(${gamma * parallaxStrength}px, ${beta * parallaxStrength}px)`
}