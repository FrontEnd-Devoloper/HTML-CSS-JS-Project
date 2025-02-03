const showToastBtn = document.querySelector('.show-toast')
const horizontalPosition = document.querySelector('#horizontal-position')
const verticalPosition = document.querySelector('#vertical-position')
const toastType = document.querySelector('#toast-type')
const toastMessage = document.querySelector('#toast-message')
const toastContainer = document.querySelector('.toast-container')
const durationInput = document.querySelector('#duration')

showToastBtn.addEventListener('click',() =>{
  const newToast = document.createElement('div')
  newToast.classList.add('toast')
  newToast.classList.add(toastType.value)

  newToast.innerText = ` ${toastMessage.value} `

  const closeIcon = document.createElement('span')
  closeIcon.innerText = '✕'
  newToast.append(closeIcon)

  function removeToast() {
    newToast.classList.add('go-left')
    setTimeout(() => {
      newToast.remove()
    }, 100)

  }

  closeIcon.addEventListener('click', () => {
    removeToast()
  })

  setTimeout(() =>{
    removeToast()
  }, parseInt(durationInput.value) * 1000)

  toastContainer.append(newToast)

  if(horizontalPosition.value === 'right'){
    toastContainer.classList.add('right')
  }else{
    toastContainer.classList.remove('right')
  }
  if(verticalPosition.value === 'bottom'){
    toastContainer.classList.add('bottom')
  }else{
    toastContainer.classList.remove('bottom')
  }

})