// 1️⃣ Глобальна та локальна змінна
function task1() {
    let userName = "Олександр"; // глобальна змінна
    console.log("Глобальна змінна userName:", userName);

    if (true) {
        let userName = prompt("Введіть інше ім’я:");
        console.log("Локальна змінна userName:", userName);

        // Виводимо обидва значення у консоль і пояснення на сторінці
        document.getElementById("task1Result").innerHTML =
            `<strong>Глобальна:</strong> Олександр<br>
             <strong>Локальна (у блоці if):</strong> ${userName}<br><br>
             Пояснення: всередині блоку <code>if</code> створюється нова локальна змінна 
             з тією ж назвою <code>userName</code>, яка "затіняє" глобальну. 
             За межами блоку діє тільки глобальна змінна.`;
    }
}

// 2️⃣ Привітання користувача
function task2() {
    const name = prompt("Введіть своє ім’я:");
    const age = prompt("Введіть свій вік:");

    if (!name || !age) {
        alert("Введіть усі дані!");
        return;
    }

    const answer = confirm(`Hello, ${name}! Your age is ${age}. Continue?`);
    if (answer) {
        alert("Welcome!");
    } else {
        alert("Goodbye!");
    }
}

// 3️⃣ Перевірка числа на парність
function task3() {
    const num = prompt("Введіть число:");
    if (num === null || num.trim() === "" || isNaN(num)) {
        alert("Введіть коректне число!");
        return;
    }

    if (num % 2 === 0) {
        alert("Number is even");
    } else {
        alert("Number is odd");
    }
}
