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

// Функция для обработки данных с гироскопа
function handleGyroscope(event) {
  const parallaxStrength = 30;

  // Получить данные с гироскопа
  const gyroscopeData = event.alpha !== null ? event : event.beta !== null ? event : event.gamma !== null ? event : null;

  if (gyroscopeData) {
    // Используйте данные с гироскопа для расчета движения
    const moveX = gyroscopeData.gamma / parallaxStrength;
    const moveY = gyroscopeData.beta / parallaxStrength;

    // Обновите положение фона
    bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
}

// Проверьте, поддерживается ли устройство гироскоп
if (window.DeviceOrientationEvent) {
  // Добавьте слушателя события для обработки данных гироскопа
  window.addEventListener('deviceorientation', handleGyroscope);
} else {
  alert("Устройство не поддерживает гироскоп.");
}