// Селектор обводок
const browsLine = document.querySelectorAll('.svg-item-1')
const lipsLine = document.querySelectorAll('.svg-item-2')
const eyelidsLine = document.querySelectorAll('.svg-item-3')
const nogtiLine = document.querySelectorAll('.svg-item-4')

// Селектор текста
const browsText = document.querySelector('.item-1')
const lipsText = document.querySelector('.item-2')
const eyelidsText = document.querySelector('.item-3')
const nogtiText = document.querySelector('.item-4')

// Селектор полей
const browsPlane = document.querySelectorAll('.item-plane-1')
const lipsPlane = document.querySelectorAll('.item-plane-2')
const eyelindsPlane = document.querySelectorAll('.item-plane-3')
const nogtiPlane = document.querySelectorAll('.item-plane-4')


// Mouseover
const mouseOverFunc = (plane, text, line) => {
  plane.forEach(item => {
    item.addEventListener('mouseover', () => {
      text.classList.toggle('hidden')
      text.style.animation = 'fadeIn .2s ease-in-out forwards'

      line.forEach(item => {
        item.classList.toggle('hidden')
        item.style.animation = 'anim 4s linear infinite'
      })
    })
  })
}

// Mouseout
const mouseOutFunc = (plane, text, line) => {
  plane.forEach(item => {
    item.addEventListener('mouseout', () => {
      text.style.animation = 'fadeOut .2s ease-in-out forwards'

      line.forEach(item => {
        item.style.animation = 'fadeOut .2s ease-in-out forwards'
        item.addEventListener('animationend', () => {
          text.classList.add('hidden')
          item.classList.add('hidden')
        })
      })
    })
  })
}


mouseOverFunc(browsPlane, browsText, browsLine)
mouseOverFunc(lipsPlane, lipsText, lipsLine)
mouseOverFunc(eyelindsPlane, eyelidsText, eyelidsLine)
mouseOverFunc(nogtiPlane, nogtiText, nogtiLine)

mouseOutFunc(browsPlane, browsText, browsLine);
mouseOutFunc(lipsPlane, lipsText, lipsLine);
mouseOutFunc(eyelindsPlane, eyelidsText, eyelidsLine);
mouseOutFunc(nogtiPlane, nogtiText, nogtiLine);