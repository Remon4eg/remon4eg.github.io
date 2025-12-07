// ===================== Допоміжні функції =====================

// Красивий вивід об’єктів та масивів
function prettyPrint(value) {
  return JSON.stringify(value, null, 2);
}

// Додає 0 спереду до числа (для формату DD.MM.YY HH:mm)
function pad2(num) {
  return num < 10 ? "0" + num : String(num);
}

// ===================== І РІВЕНЬ: ТЕОРІЯ =====================

// 1) Поточна дата + доступ до компонентів (getFullYear, getMonth, getDate, getDay, getTime, getTimezoneOffset)
function showCurrentDateInfo() {
  const out = document.getElementById("theoryOutput");
  const now = new Date();

  const info = {
    fullDate: now.toString(),
    year: now.getFullYear(),
    month_0_11: now.getMonth(), // 0–11
    date: now.getDate(),
    day_0_6: now.getDay(),      // 0–6, неділя = 0
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    ms: now.getMilliseconds(),
    timestamp: now.getTime(),
    timezoneOffsetMinutes: now.getTimezoneOffset()
  };

  out.textContent = "Поточна дата та її компоненти:\n" + prettyPrint(info);
}

// 2) Приклади створення Date різними способами (new Date(), з мс, з рядка, з компонентів)
function showCreationExamples() {
  const out = document.getElementById("theoryOutput");

  const now = new Date();
  const fromTimestamp = new Date(0); // 01.01.1970 UTC
  const fromString = new Date("2023-10-05T12:30:00");
  const fromComponents = new Date(2024, 0, 15, 10, 0, 0); // 15.01.2024 10:00:00

  const examples = {
    "new Date()": now.toString(),
    "new Date(0)": fromTimestamp.toString(),
    'new Date("2023-10-05T12:30:00")': fromString.toString(),
    "new Date(2024, 0, 15, 10, 0, 0)": fromComponents.toString()
  };

  out.textContent = "Приклади створення об’єктів Date:\n" + prettyPrint(examples);
}

// 3) Приклад методів set* і автокорекції
function showSetAndAutoCorrection() {
  const out = document.getElementById("theoryOutput");

  const d1 = new Date(2024, 0, 31);  // 31.01.2024
  d1.setMonth(1); // спроба поставити 31.02.2024 → автокорекція → 02.03.2024

  const d2 = new Date(2016, 1, 28);  // 28.02.2016
  d2.setDate(d2.getDate() + 2);      // додаємо 2 дні → 01.03.2016 (високосний рік)

  const d3 = new Date(2024, 5, 1);
  d3.setHours(25); // 25 годин → +1 день, 1 година

  const result = {
    "Після d1.setMonth(1) для 31.01.2024": d1.toString(),
    "28.02.2016 + 2 дні (автокорекція)": d2.toString(),
    "1 червня 2024 з setHours(25)": d3.toString()
  };

  out.textContent = "Автокорекція при встановленні компонентів дати:\n" +
                    prettyPrint(result);
}

// 4) Timestamp, різниця дат, Date.now()
function showTimestampExamples() {
  const out = document.getElementById("theoryOutput");

  const date1 = new Date();
  const date2 = new Date(date1.getTime() + 5 * 60 * 1000); // +5 хвилин

  const diffMs = date2 - date1; // різниця дат у мс
  const diffSeconds = diffMs / 1000;

  const start = Date.now();
  for (let i = 0; i < 1_000_000; i++) { /* якась робота */ }
  const end = Date.now();
  const elapsed = end - start;

  const info = {
    date1: date1.toString(),
    date2: date2.toString(),
    diffMs,
    diffSeconds,
    "Date.now() start": start,
    "Date.now() end": end,
    elapsedMs: elapsed
  };

  out.textContent = "Робота з timestamp, різниця дат та Date.now():\n" +
                    prettyPrint(info);
}

// 5) Приклад Date.parse()
function showParseExample() {
  const out = document.getElementById("theoryOutput");
  const str = "2023-12-31T23:59:00";
  const ts = Date.parse(str);   // мілісекунди
  const parsedDate = new Date(ts);

  const data = {
    originalString: str,
    timestamp: ts,
    parsedDate: parsedDate.toString()
  };

  out.textContent = "Приклад Date.parse(str):\n" + prettyPrint(data);
}

// ===================== ІІ РІВЕНЬ: ПРАКТИЧНІ ПРИКЛАДИ =====================

// 1) Різниця до Нового року (як у прикладі з лаби)
function showNewYearDiff() {
  const out = document.getElementById("practiceOutput");

  const today = new Date();
  const nextYear = today.getFullYear() + 1;
  const newYearDate = new Date(nextYear, 0, 1); // 1 січня наступного року

  const diffMs = newYearDate - today;
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  out.textContent =
    "Сьогодні:     " + today.toLocaleString() + "\n" +
    "Новий рік:    " + newYearDate.toLocaleString() + "\n" +
    "Залишилось:   " +
    days + " днів, " +
    hours + " годин, " +
    minutes + " хвилин, " +
    seconds + " секунд.";
}

// 2) toLocaleString() з різними мовами та опціями
function showLocaleDateExamples() {
  const out = document.getElementById("practiceOutput");
  const today = new Date();

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  const ua = today.toLocaleString("uk-UA", options);
  const en = today.toLocaleString("en-GB", options);
  const ar = today.toLocaleString("ar-EG", options);

  const text =
    "Поточна дата з options:\n\n" +
    "Українська (uk-UA): " + ua + "\n" +
    "Англійська (en-GB): " + en + "\n" +
    "Арабська (ar-EG):   " + ar + "\n";

  out.textContent = text;
}

// 3) П’ятниця 13-го для заданого року (getDay, цикл по місяцях)
function showFridays13() {
  const out = document.getElementById("practiceOutput");
  const yearSelect = document.getElementById("fridayYearSelect");
  const year = Number(yearSelect.value);

  let result = "П’ятниці 13-го у " + year + " році:\n";
  let count = 0;

  for (let month = 0; month < 12; month++) {
    const d = new Date(year, month, 13);
    // getDay() === 5 → п’ятниця
    if (d.getDay() === 5) {
      result += "- " + d.toLocaleDateString("uk-UA") + "\n";
      count++;
    }
  }

  if (count === 0) {
    result += "У цьому році немає п’ятниці 13-го (дуже дивно 🙂).";
  }

  out.textContent = result;
}
