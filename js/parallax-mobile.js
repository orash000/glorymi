const bg = document.querySelector('.bg')
window.addEventListener('deviceorientation', handleOrientation)

const handleOrientation = (e) => {
  const beta = e.beta
  const gamma = e.gamma
  const parallaxStrength = 10

  bg.style.transform = `translate(${gamma * parallaxStrength}px, ${beta * parallaxStrength}px)`
}