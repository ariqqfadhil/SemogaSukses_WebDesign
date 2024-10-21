document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelector('.number');
    let hasAnimated = false; // To ensure the animation runs only once

    const animateNumber = () => {
        let startValue = 0;
        const endValue = 1329; // Change this to your desired number
        const duration = 2000; // Duration in milliseconds

        const increment = (endValue - startValue) / (duration / 100); // Increment per step

        const updateNumber = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                startValue = endValue; // Ensure it ends at the target number
                clearInterval(updateNumber); // Stop the interval
            }
            numberElement.textContent = Math.floor(startValue); // Update the displayed number
        }, 100);
    };

    // Intersection Observer to detect when .container2 is in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateNumber(); // Start the animation
                hasAnimated = true; // Prevent it from running again
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    });

    observer.observe(document.querySelector('.container2')); // Observe the container
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

  document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelector('.number2');
    let hasAnimated = false; // To ensure the animation runs only once

    const animateNumber = () => {
        let startValue = 0;
        const endValue = 34; // Change this to your desired number
        const duration = 2000; // Duration in milliseconds

        const increment = (endValue - startValue) / (duration / 100); // Increment per step

        const updateNumber = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                startValue = endValue; // Ensure it ends at the target number
                clearInterval(updateNumber); // Stop the interval
            }
            numberElement.textContent = Math.floor(startValue); // Update the displayed number
        }, 100);
    };

    // Intersection Observer to detect when .container2 is in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateNumber(); // Start the animation
                hasAnimated = true; // Prevent it from running again
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    });

    observer.observe(document.querySelector('.container2')); // Observe the container
});