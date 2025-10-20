// 1️⃣ Перевірка парності числа
function checkEven() {
    const num = parseInt(document.getElementById("journalNumber").value);
    const result = document.getElementById("evenResult");

    if (isNaN(num)) {
        result.textContent = "Будь ласка, введіть число!";
        result.style.color = "gray";
        return;
    }

    if (num % 2 === 0) {
        result.textContent = `${num} — парне число`;
        result.style.color = "green";
    } else {
        result.textContent = `${num} — непарне число`;
        result.style.color = "red";
    }
}

// 2️⃣ Генерація пароля
function generatePassword() {
    const name = document.getElementById("studentName").value.trim();
    const number = parseInt(document.getElementById("studentNumber").value);
    const resultDiv = document.getElementById("passwordResult");

    if (!name || isNaN(number)) {
        resultDiv.textContent = "Введіть коректне ім'я і номер!";
        return;
    }

    const password = name.slice(0, 3).toLowerCase() + (number * 2);
    resultDiv.textContent = `Ваш пароль: ${password}`;
}

// 3️⃣ Обчислення середнього бала
function calcAverage() {
    const grade1 = parseFloat(prompt("Введіть першу оцінку:"));
    const grade2 = parseFloat(prompt("Введіть другу оцінку:"));
    const grade3 = parseFloat(prompt("Введіть третю оцінку:"));

    if ([grade1, grade2, grade3].some(isNaN)) {
        alert("Всі оцінки мають бути числами!");
        return;
    }

    const avg = ((grade1 + grade2 + grade3) / 3).toFixed(2);

    // створюємо div з id = номер у журналі
    const journalNumber = prompt("Введіть свій номер у журналі:");
    if (!journalNumber) return;

    const div = document.createElement("div");
    div.id = journalNumber;
    div.textContent = `Середня оцінка: ${avg}`;
    div.style.marginTop = "10px";
    div.style.fontWeight = "bold";

    const container = document.getElementById("averageContainer");
    container.innerHTML = ""; // очищаємо перед новим виведенням
    container.appendChild(div);
}

// 4️⃣ Введення студентів
function inputStudents() {
    const count = parseInt(prompt("Скільки студентів у групі?"));
    if (isNaN(count) || count <= 0) return alert("Некоректне число!");

    const listDiv = document.getElementById("studentsList");
    listDiv.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const name = prompt(`Введіть прізвище та ім'я студента №${i}:`);
        const p = document.createElement("p");
        p.textContent = `${i}. ${name}`;
        listDiv.appendChild(p);
    }
}
