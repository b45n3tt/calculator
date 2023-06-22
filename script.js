document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".grid-container");
  let oneButton = null;
  let twoButton = null;
  let threeButton = null;
  let fourButton = null;
  let fiveButton = null;
  let sixButton = null;
  let sevenButton = null;
  let eightButton = null;
  let nineButton = null;
  let zeroButton = null;
  let plusButton = null;
  let subtractButton = null;
  let multiplyButton = null;
  let divideButton = null;
  let equalButton = null;
  const clearButton = document.getElementById('clear-button');
  const outputElement = document.querySelector("#output"); // Assuming you have an element with the id "output" for displaying the result
  const numberStrings = []; // Array to store individual number strings
  let currentNumberString = ""; // String to store the current number being entered
  let isMouseDown = false;

  clearButton.addEventListener('click', clearCalculator);
  
  // Create grid for buttons
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      container.appendChild(gridItem);

       // Mouse hover event listener
      gridItem.addEventListener("mouseover", function(event) {
        gridItem.classList.add("pulsating"); // Apply the pulsating animation on mouse hover
        if (isMouseDown) {
          if (event.target === oneButton) {
            // Handle mouse hover on oneButton
            // Add your code to animate the number popout or perform any desired action
            console.log("One button hovered");
          // This could trigger the keypad or perform any desired action
          }
        }
      });

      gridItem.addEventListener("mouseleave", function() {
        gridItem.classList.remove("pulsating");
      });

      

      gridItem.addEventListener("mousedown", function(event) {
        isMouseDown = true;
        if (event.target === oneButton) {
          currentNumberString += "1";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === twoButton) {
          currentNumberString += "2";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === threeButton) {
          currentNumberString += "3";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === fourButton) {
          currentNumberString += "4";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === fiveButton) {
          currentNumberString += "5";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === sixButton) {
          currentNumberString += "6";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === sevenButton) {
          currentNumberString += "7";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === eightButton) {
          currentNumberString += "8";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === nineButton) {
          currentNumberString += "9";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === zeroButton) {
          currentNumberString += "0";
          outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
        } else if (event.target === plusButton) {
          numberStrings.push(currentNumberString); // Add the current number string to the array
          currentNumberString = ""; // Reset the current number string
          outputElement.textContent = numberStrings.join(" "); // Set the output to the concatenated number strings in the DOM
          
          if (numberStrings.length >= 2) {
            const result = calculateResult(numberStrings); // Calculate the result
            numberStrings.length = 1; // Keep the result in the number strings array for further operations
            numberStrings[0] = result.toString(); // Store the result as the first element in the array
            outputElement.textContent = result; // Set the output to the result in the DOM
          }
        } else if (event.target === minusButton) {
          numberStrings.push(currentNumberString); // Add the current number string to the array
          currentNumberString = ""; // Reset the current number string
          outputElement.textContent = numberStrings.join(" "); // Set the output to the concatenated number strings in the DOM
          
          if (numberStrings.length >= 2) {
            const result = calculateResult(numberStrings); // Calculate the result
            numberStrings.length = 1; // Keep the result in the number strings array for further operations
            numberStrings[0] = result.toString(); // Store the result as the first element in the array
            outputElement.textContent = result; // Set the output to the result in the DOM
          }
        } else if (event.target === multiplyButton) {
          console.log("multiply button clicked");
          numberStrings.push(currentNumberString); // Add the current number string to the array
          currentNumberString = ""; // Reset the current number string
          outputElement.textContent = numberStrings.join(" "); // Set the output to the concatenated number strings in the DOM
          
          if (numberStrings.length >= 2) {
            const result = calculateResult(numberStrings); // Calculate the result
            numberStrings.length = 1; // Keep the result in the number strings array for further operations
            numberStrings[0] = result.toString(); // Store the result as the first element in the array
            outputElement.textContent = result; // Set the output to the result in the DOM
          }
        } else if (event.target === divideButton) {
          console.log("divide button clicked");
          numberStrings.push(currentNumberString); // Add the current number string to the array
          currentNumberString = ""; // Reset the current number string
          outputElement.textContent = numberStrings.join(" "); // Set the output to the concatenated number strings in the DOM
          
          if (numberStrings.length >= 2) {
            const result = calculateResult(numberStrings); // Calculate the result
            numberStrings.length = 1; // Keep the result in the number strings array for further operations
            numberStrings[0] = result.toString(); // Store the result as the first element in the array
            outputElement.textContent = result; // Set the output to the result in the DOM
          }
        } else if (event.target === equalButton) {
          console.log("Equal button clicked");
          numberStrings.push(currentNumberString); // Add the current number string to the array
          const result = calculateResult(numberStrings); // Calculate the result
          numberStrings.length = 0; // Clear the number strings array
          currentNumberString = result.toString(); // Store the result as the current number string
          outputElement.textContent = currentNumberString; // Set the output to the result in the DOM
        } else if (event.target === clearButton) {
            clearCalculator();
        }

// Function to clear the calculator
const clearCalculator = () => {
  numberStrings.length = 0;
  currentNumberString = "";
  outputElement.textContent = "0";
};


       // Function to perform the arithmetic operation
    const performOperation = (operator) => {
      numberStrings.push(currentNumberString); // Add the current number string to the array
      currentNumberString = ""; // Reset the current number string
      outputElement.textContent = numberStrings.join(" "); // Set the output to the concatenated number strings in the DOM
      
      if (numberStrings.length >= 2) {
        const result = calculateResult(numberStrings); // Calculate the result
        numberStrings.length = 1; // Keep the result in the number strings array for further operations
        numberStrings[0] = result.toString(); // Store the result as the first element in the array
        outputElement.textContent = result; // Set the output to the result in the DOM
      }
    };
    
      });

      //  buttons
      {
        if (i === 2 && j === 0) {
          gridItem.textContent = "1" 
          gridItem.classList.add("one-button");
          oneButton = gridItem;
          }
  
          if (i === 2 && j === 1) {
          gridItem.textContent = "2" 
          gridItem.classList.add("one-button");
          twoButton = gridItem;
          }
  
          if (i === 2 && j === 2) {
          gridItem.textContent = "3" 
          gridItem.classList.add("one-button");
          threeButton = gridItem;
          }
  
          if (i === 1 && j === 0) {
          gridItem.textContent = "4" 
          gridItem.classList.add("one-button");
          fourButton = gridItem;
          }
  
          if (i === 1 && j === 1) {
          gridItem.textContent = "5" 
          gridItem.classList.add("one-button");
          fiveButton = gridItem;
          }
  
          if (i === 1 && j === 2) {
          gridItem.textContent = "6" 
          gridItem.classList.add("one-button");
          sixButton = gridItem;
          }
  
          if (i === 0 && j === 0) {
          gridItem.textContent = "7" 
          gridItem.classList.add("one-button");
          sevenButton = gridItem;
          }
  
          if (i === 0 && j === 1) {
          gridItem.textContent = "8" 
          gridItem.classList.add("one-button");
          eightButton = gridItem;
          }
  
          if (i === 0 && j === 2) {
          gridItem.textContent = "9" 
          gridItem.classList.add("one-button");
          nineButton = gridItem;
          }
  
          if (i === 3 && j === 0) {
          gridItem.textContent = "0" 
          gridItem.classList.add("one-button");
          zeroButton = gridItem;
          }
  
          if (i === 3 && j === 3) {
            gridItem.textContent = "+";
            gridItem.classList.add("op-button");
            plusButton = gridItem;
          }
    
          if (i === 3 && j === 2) {
            gridItem.textContent = "=";
            gridItem.classList.add("op-button");
            equalButton = gridItem;
          }
  
          if (i === 2 && j === 3) {
            gridItem.textContent = "-";
            gridItem.classList.add("op-button");
            minusButton = gridItem;
          }
    
          if (i === 1 && j === 3) {
            gridItem.textContent = "*";
            gridItem.classList.add("op-button");
            multiplyButton = gridItem;
          }
  
          if (i === 0 && j === 3) {
            gridItem.textContent = "/";
            gridItem.classList.add("op-button");
            divideButton = gridItem;
          }
    
          if (i === 3 && j === 1) {
            gridItem.textContent = ".";
            gridItem.classList.add("op-button");
            decimalButton = gridItem;
          }
      }

    }
  }

  function clearCalculator() {
    numberStrings.length = 0;
      currentNumberString = "";
      outputElement.textContent = "0";
    outputElement.innerText = ''; // Assuming 'output' is the element that displays the calculation result
  }

  const operate = (operator, num1, num2) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return NaN;
    }
  };
  

  // Calculate the result based on the number strings and the operator
  const calculateResult = (numberStrings) => {
    let result = parseFloat(numberStrings[0]);
    let operator = "+"; // Default operator is "+"
  
    for (let i = 1; i < numberStrings.length; i++) {
      const currentString = numberStrings[i];
      
      if (currentString === "+" || currentString === "-" || currentString === "*" || currentString === "/") {
        operator = currentString;
      } else {
        const operand = parseFloat(currentString);
        result = operate(operator, result, operand);
      }
    }
  
    return result;
  };
  

  // Store calculator functions in localStorage
  localStorage.setItem(
    "calculatorFunctions",
    JSON.stringify({
      operate: operate.toString(),
      calculateResult: calculateResult.toString()
    })
  );
  
  
  // Keyboard event listener for key press
  document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
      if (oneButton) {
        console.log("One key pressed");
        currentNumberString += "1";
        outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
      }
    }
  });
});
