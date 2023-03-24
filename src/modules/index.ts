console.log("hej");
const img = document.createElement('img');
document.body.append(img);
const imgUrl = new URL('./src/calc-img.jpeg', import.meta.url);
img.src = imgUrl.href;
img.classList.add('img');

// Get references to the HTML elements
const result = document.querySelector('.result') as HTMLInputElement;
const buttons = document.querySelectorAll('.btn');

// Initialize variables for the calculator
let firstOperand:string = '';
let secondOperand:string = '';
let operator:string = '';

// Helper function to clear the calculator
function clear():void {
  result.value = '';
  firstOperand = '';
  secondOperand = '';
  operator = '';
}

// Helper function to perform the calculation
function calculate():void {
  const a:number = parseInt(firstOperand);
  const b:number = parseInt(secondOperand);
  let resultat:string = '';

  switch (operator) {
    case '+':
    //   result.value = (a + b).toString();
    resultat = (a + b).toString();
    result.value = resultat;
      break;
    case '-':
    //   result.value = (a - b).toString();
    resultat = (a - b).toString();
    result.value = resultat;
      break;
    case '×':
    //   result.value = (a * b).toString();
    resultat = (a * b).toString();
    result.value = resultat;
      break;
    case '÷':
    //   result.value = (a / b).toString();
    resultat = (a / b).toString();
    result.value = resultat;
      break;
  }

  // Reset the variables
//   firstOperand = result.value;
  resultat = result.value;
  firstOperand = '';
  secondOperand = '';
  operator = '';
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clear();
    } else if (value === '=') {
      calculate();
    } else if (value === '+' || value === '-' || value === '×' || value === '÷') {
      operator = value;
      firstOperand = result.value;
      secondOperand = '';
    } else {
      if (operator === '') {
        console.log('klick1')
        firstOperand += value;
        result.value = firstOperand;
      } else {
        secondOperand += value;
        result.value = secondOperand;
      }
    }
  });
});

