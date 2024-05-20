const negativePlus = document.querySelector('.btn-negative');
const resultScreenMain = document.getElementById('result');

negativePlus.addEventListener('click', () => {
  if (resultScreenMain.textContent != '0' && resultScreenMain.textContent[0] != '-') {
    resultScreenMain.textContent = -+resultScreenMain.textContent + '';
  } else {
    resultScreenMain.textContent = -+resultScreenMain.textContent + '';
  }
});

function clearScreen() {
  document.getElementById('result').innerText = '0';
}

function appendValue(value) {
  const result = document.getElementById('result');
  if (result.innerText === '0') {
    result.innerText = value;
  } else {
    result.innerText += value;
  }
}

function calculateResult() {
  const result = document.getElementById('result');
  try {
    result.innerText = eval(result.innerText);
  } catch {
    result.innerText = 'Error';
  }
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById('result').innerText);
  const from = document.getElementById('currency-from').value;
  const to = document.getElementById('currency-to').value;
  const rates = {
    USD: 1,
    EUR: 0.85,
    CNY: 6.45,
    RUB: 93,
    KZT: 420,
  };

  if (isNaN(amount)) {
    document.getElementById('result').innerText = 'Error';
    return;
  }

  const convertedAmount = (amount / rates[from]) * rates[to];
  document.getElementById('result').innerText = convertedAmount.toFixed(2);
}

function switchTheme(theme) {
  document.body.className = theme;
}

const calculatePercentage = () => {
  const result = document.getElementById('result');
  result.innerHTML = parseFloat(result.innerHTML) / 100;
};
