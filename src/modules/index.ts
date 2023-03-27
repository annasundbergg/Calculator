let imgUrl = new URL('../calc-img.png', import.meta.url);
document.body.style.background = "url(".concat(imgUrl.href, ") center");

const result = document.querySelector('.result') as HTMLInputElement;
const buttons = document.querySelectorAll('.btn');

let firstNum:string = '';
let secondNum:string = '';
let operator:string = '';

// Helper function to clear the calculator
function clear():void {
  result.value = '';
  firstNum = '';
  secondNum = '';
  operator = '';
}

// Helper function to perform the calculation
function calculate():void {
  const a:number = parseInt(firstNum);
  const b:number = parseInt(secondNum);
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
  firstNum = '';
  secondNum = '';
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
      firstNum = result.value;
      secondNum= '';
    } else {
      if (operator === '') {
        console.log('klick1')
        firstNum += value;
        result.value = firstNum;
      } else {
        secondNum += value;
        result.value = secondNum;
      }
    }
  });
});

