const add = () => {
  // console.log(typeof document.getElementById('number-1').value) gets you string
  const num1 = parseFloat(document.getElementById('number-1').value);
  const num2 = parseFloat(document.getElementById('number-2').value);
  displayResult(num1 + num2)
}

const subtract = () => {
  const num1 = parseFloat(document.getElementById('number-1').value);
  const num2 = parseFloat(document.getElementById('number-2').value);
  displayResult(num1 - num2)
}

const multiply = () => {
  const num1 = parseFloat(document.getElementById('number-1').value);
  const num2 = parseFloat(document.getElementById('number-2').value);
  displayResult(num1 * num2)
}

const divide = () => {
  const num1 = parseFloat(document.getElementById('number-1').value);
  const num2 = parseFloat(document.getElementById('number-2').value);
  displayResult(num1 / num2)
}

const pow = () => {
  const num1 = parseFloat(document.getElementById('number-1').value);
  const num2 = parseFloat(document.getElementById('number-2').value);
  let result = 1;
  for (let i = 0; i < num2; i++) {
    result *= num1;
    console.log(result);
  }
  displayResult(result);
}

const clearScreen = () => {
  const num1 = document.getElementById('number-1');
  const num2 = document.getElementById('number-2')
  const resultOutput = document.getElementById('result-output');
  num1.value = "";
  num2.value = "";
  resultOutput.innerHTML = "";
}


const displayResult = (result) => {
  const resultOutput = document.getElementById('result-output');
  resultOutput.innerHTML = String(result);
  if (result < 0) {
    resultOutput.style.color = 'red';
  } else {
    resultOutput.style.color = 'black';
  }
}

