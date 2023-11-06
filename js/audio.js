const audio = new Audio("music/music.mp3")
const audioPlay = document.querySelector('.header__music-play')
const audioStop = document.querySelector('.header__music-stop')


// Проигрывание аудио
audioPlay.addEventListener('click', () => {
  audioPlay.classList.add('hidden')
  audioStop.classList.remove('hidden')
  return audio.play()
})

// Остановка аудио
audioStop.addEventListener('click', () => {
  audioPlay.classList.remove('hidden')
  audioStop.classList.add('hidden')
  audio.pause()
})