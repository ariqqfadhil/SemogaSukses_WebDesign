document.addEventListener("DOMContentLoaded", () => {
    const numberElement = document.querySelector('.number');
    const targetNumber = parseInt(numberElement.getAttribute('data-target'));
    const duration = 2000; // Animation duration in milliseconds
    const incrementTime = duration / targetNumber; // Time for each increment
  
    let currentNumber = 0;
  
    const incrementNumber = () => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        numberElement.textContent = currentNumber;
        setTimeout(incrementNumber, incrementTime);
      }
    };
  
    incrementNumber();
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const numberElement = document.querySelector('.number1');
    const targetNumber = parseInt(numberElement.getAttribute('data-target1'));
    const duration = 2000; // Animation duration in milliseconds
    const incrementTime = duration / targetNumber; // Time for each increment
  
    let currentNumber = 0;
  
    const incrementNumber = () => {
      if (currentNumber < targetNumber) {
        currentNumber++;
        numberElement.textContent = currentNumber;
        setTimeout(incrementNumber, incrementTime);
      }
    };
  
    incrementNumber();
  });