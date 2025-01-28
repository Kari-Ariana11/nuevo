let currentInput = ''; // Guardará la entrada actual de la calculadora

// Función para agregar un número al display
function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

// Función para agregar un operador (+, -, *, /)
function appendOperator(operator) {
  if (currentInput !== '') {
    currentInput += ' ' + operator + ' ';
    document.getElementById('display').value = currentInput;
  }
}

// Función para limpiar la pantalla
function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

// Función para calcular el resultado
function calculateResult() {
  try {
    // Evaluar la expresión matemática ingresada
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}
