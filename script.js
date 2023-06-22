document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".grid-container");
    let oneButton = null;
    const outputElement = document.querySelector("#output"); // Assuming you have an element with the id "output" for displaying the result
    const numberStrings = []; // Array to store individual number strings
    let currentNumberString = ""; // String to store the current number being entered
  
    // Create grid for buttons
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
  
        gridItem.addEventListener("mousedown", function(event) {
          isMouseDown = true;
          if (event.target === oneButton) {
            console.log("One button clicked");
            currentNumberString += "1";
            outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
          } else if (event.target === twoButton) {
            console.log("Two button clicked");
            currentNumberString += "2";
            outputElement.textContent = currentNumberString; // Set the output to the current number string in the DOM
          } else if (event.target === plusButton) {
            console.log("Plus button clicked");
            numberStrings.push(currentNumberString); // Add the current number string to the array
            currentNumberString = ""; // Reset the current number string
            outputElement.textContent = numberStrings.join(" "); // Set the output to the concatenated number strings in the DOM
          } else if (event.target === equalButton) {
            console.log("Equal button clicked");
            numberStrings.push(currentNumberString); // Add the current number string to the array
            const result = calculateResult(numberStrings); // Calculate the result
            numberStrings.length = 0; // Clear the number strings array
            currentNumberString = result.toString(); // Store the result as the current number string
            outputElement.textContent = currentNumberString; // Set the output to the result in the DOM
          }
        });
  
        // Set the first grid item as the one button
        if (i === 2 && j === 0) {
          gridItem.textContent = "1";
          gridItem.classList.add("one-button");
          oneButton = gridItem;
        }
  
        if (i === 2 && j === 1) {
          gridItem.textContent = "2";
          gridItem.classList.add("one-button");
          twoButton = gridItem;
        }
  
        if (i === 2 && j === 3) {
          gridItem.textContent = "+";
          gridItem.classList.add("op-button");
          plusButton = gridItem;
        }
  
        if (i === 3 && j === 3) {
          gridItem.textContent = "=";
          gridItem.classList.add("op-button");
          equalButton = gridItem;
        }
      }
    }
  
    // Arithmetic operations
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
      for (let i = 1; i < numberStrings.length; i++) {
        const operator = "+";
        const operand = parseFloat(numberStrings[i]);
        result = operate(operator, result, operand);
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
  
    // Keyboard event listener for "1" key press
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
  