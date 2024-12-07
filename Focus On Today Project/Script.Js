const checkBoxList = document.querySelectorAll('.custom-checkbox')
const goalInputList = document.querySelectorAll('.goal-input')
const errorLable = document.querySelector('#error-text')
const progressBar = document.querySelector(".progress-bar")
const goalContaienr = document.querySelector('.goal-contaiener')

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener('click', (e) => {
    const allGoalsAdded = [...goalInputList].every(function (input) {
      return input.value
    })

    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle('Completed')
      const inputId = checkBox.nextElementSibling.id
      allGoals[inputId].completed = !allGoals[inputId].completed
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
    } else {
      progressBar.classList.add('show-error')
    } 
  })
})

goalInputList.forEach((input) => {
  if(allGoals[input.id]) {
    input.value = allGoals[input.id].name

    if ([input.id].completed) {
      input.parentElement.classList.add('completed')
    }
  }

  input.addEventListener('focus', () => {
    progressBar.classList.remove("show-error")
  })

  input.addEventListener('input', (e) => {
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    }
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })
})
