// 1️⃣ Функція startGreetingTimer(message, seconds, callback)
function startGreetingTimer(message, seconds, callback) {
  console.log(`Очікування ${seconds} секунд...`);
  setTimeout(() => {
    alert(message);
    callback();
  }, seconds * 1000);
}

// Викликається при натисканні кнопки
function runTimer() {
  const message = document.getElementById("msg").value || "Привіт!";
  const seconds = parseInt(document.getElementById("sec").value) || 2;

  // Використовуємо стрілкову функцію як колбек
  startGreetingTimer(message, seconds, () => alert("Time is up!"));
}

// 2️⃣ Калькулятор
function calculate(a, b, operation) {
  switch (operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Ділення на нуль неможливе!";
    default: return "Invalid operation";
  }
}

function showResult() {
  const a = parseFloat(prompt("Введіть перше число:"));
  const b = parseFloat(prompt("Введіть друге число:"));
  const operation = prompt("Введіть операцію (+, -, *, /):");

  if (isNaN(a) || isNaN(b)) {
    alert("Будь ласка, введіть числа!");
    return;
  }

  const result = calculate(a, b, operation);
  alert(`Результат: ${result}`);
}

// 3️⃣ Замикання (Closure)
function createClickCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Клік №${count}`);
    document.getElementById("countDisplay").textContent = `Лічильник: ${count}`;
  };
}

// створюємо лічильник при завантаженні сторінки
const counter = createClickCounter();
document.getElementById("countBtn").addEventListener("click", counter);
