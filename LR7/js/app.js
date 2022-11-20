const Hint = (name) => {
  let element = document.getElementById(name)
  element.classList.add("active")
}

const Exit = () => {
  let element = document.querySelector(".active")
  element.classList.remove("active")
}

const Task1 = () => {
  const fInput = document.querySelector('.farenheit-input');
  const cInput = document.querySelector('.celcium-input');
  
  function convertToCelcium(f) {
    return 5 / 9 * (f - 32)
  }
  
  function convertToFarenheit(c) {
    return 9 / 5 + (c + 32)
  }
  
  fInput.addEventListener('change', (e) => {
    const value = +e.target.value;
    cInput.value = Math.floor(convertToCelcium(value));
  })
  
  cInput.addEventListener('change', (e) => {
    const value = +e.target.value;
    fInput.value = Math.floor(convertToFarenheit(value));
  });
}
  

const Task2 = () => {
  const score = 10;
  let correctScore = 0;
  let currentScore = 1;
  
  let firstNumber;
  let secondNumber;
  
  const generateTask = () => {
    const { random, floor } = Math;
    firstNumber = floor(random() * 10);
    secondNumber = floor(random() * 10);
    
    document.querySelector('#firstNum').innerHTML = firstNumber;
    document.querySelector('#secondNum').innerHTML = secondNumber;
  }
  
  generateTask();
  
  document.querySelector('#check-btn').addEventListener('click', () => {
    const correctResult = firstNumber * secondNumber;
    const userResult = +document.querySelector('#userInput').value;
  
    if (userResult === correctResult) {
      correctScore += 1;
      document.getElementById('correct-score').innerHTML = correctScore;
      document.querySelector('#userInput').value = '';
      generateTask();
      document.querySelector('#userInput').focus();
    } else {
      document.getElementById('correct-answer').innerHTML = correctResult;
    }
  });
  
  document.querySelector('#next-task').addEventListener('click', generateTask);
  
  }

const Task3 = () => {
  const score = 10;
  let correctScore = 0;
  let currentScore = 1;
  
  let firstNumber;
  let secondNumber;
  
  const generateTask = () => {
    const { random, floor } = Math;
    firstNumber = floor(random() * 10);
    secondNumber = floor(random() * 10);
    
    document.querySelector('#firstNum').innerHTML = firstNumber;
    document.querySelector('#secondNum').innerHTML = secondNumber;
  }
  
  generateTask();
  
  document.querySelector('#check-btn').addEventListener('click', () => {
    const correctResult = firstNumber * secondNumber;
    const userResult = document.getElementById('choice3').checked;
    console.log(userResult);
  
    if (userResult) {
      correctScore += 1;
      document.getElementById('correct-score').innerHTML = correctScore;
      generateTask();
    } else {
      document.getElementById('correct-answer').innerHTML = correctResult;
    }
  });
  
  document.querySelector('#next-task').addEventListener('click', generateTask);
  
  
  
}

const Task4 = () => {
}

const Task5 = () => {
}


setInterval(() => {
  Task1()
  Task5()
}, 1000)