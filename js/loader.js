const loaderBlock = document.querySelector('.loader')

setTimeout(() => {
  loaderBlock.style.animation = 'loaderStaring 1s ease-in-out infinite, loaderEnding 0.5s ease-in-out forwards';
}, 1500)