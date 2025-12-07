// Ключ для localStorage
const STORAGE_KEY = "todo-list-items";

// Отримуємо елементи DOM
const newTodoInput = document.getElementById("newTodoInput");
const todoList = document.getElementById("todoList");

// Масив завдань у пам'яті
let todos = [];

/*
   Структура одного завдання:
   {
     id: number,
     text: string,
     createdAt: string (ISO-рядок дати),
     completed: boolean
   }
*/

// ========== ІНІЦІАЛІЗАЦІЯ ==========

// Завантажити дані з localStorage при старті
window.addEventListener("DOMContentLoaded", () => {
  loadTodos();
  renderTodos();
});

// ========== ЗБЕРЕЖЕННЯ / ЗАВАНТАЖЕННЯ ==========

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      todos = JSON.parse(saved);
    } catch (e) {
      console.error("Помилка при читанні localStorage:", e);
      todos = [];
    }
  } else {
    todos = [];
  }
}

// ========== ДОДАВАННЯ ЗАВДАННЯ (п.1) ==========

// Додати завдання при натисканні Enter в полі вводу
newTodoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const text = newTodoInput.value.trim();
    if (text !== "") {
      addTodo(text);
      newTodoInput.value = "";
    }
  }
});

function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
    completed: false
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
}

// ========== РЕНДЕР СПИСКУ ЗАВДАНЬ (п.2-5) ==========

function renderTodos() {
  // очищаємо список
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (todo.completed) {
      li.classList.add("completed");
    }
    li.dataset.id = String(todo.id);

    // Ліва частина: чекбокс + текст/дата
    const left = document.createElement("div");
    left.classList.add("todo-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = todo.completed;

    // п.4 – при кліку чекбокс → завдання виконане
    checkbox.addEventListener("change", () => {
      completeTodo(todo.id);
    });

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("todo-text-wrapper");

    const textElem = document.createElement("p");
    textElem.classList.add("todo-text");
    textElem.textContent = todo.text;

    // п.6 – редагування при подвійний клік
    textElem.addEventListener("dblclick", () => {
      startEditingTodo(todo.id, textElem);
    });

    const dateElem = document.createElement("span");
    dateElem.classList.add("todo-date");
    dateElem.textContent = formatDateTime(todo.createdAt);

    textWrapper.appendChild(textElem);
    textWrapper.appendChild(dateElem);

    left.appendChild(checkbox);
    left.appendChild(textWrapper);

    // Права частина: хрестик (видалення) (п.5)
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo-delete-btn");
    deleteBtn.textContent = "×";
    deleteBtn.title = "Видалити завдання";

    deleteBtn.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    li.appendChild(left);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

// Форматування дати/часу (п.2)
function formatDateTime(isoString) {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2); // останні 2 цифри
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // формат: 12.12.22, 16:09
  return `${day}.${month}.${year}, ${hours}:${minutes}`;
}

// ========== ОНОВЛЕННЯ СТАНУ (виконано / видалено / редаговано) ==========

// Позначити виконаним (п.4)
function completeTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: true } : todo
  );
  saveTodos();
  renderTodos();
}

// Видалити завдання (п.5)
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

// Редагування завдання (п.6)
function startEditingTodo(id, textElem) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  const li = textElem.closest(".todo-item");
  const textWrapper = textElem.parentElement;

  // Створюємо input для редагування
  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("todo-edit-input");
  input.value = todo.text;

  // При натисканні Enter – зберегти
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const newText = input.value.trim();
      if (newText !== "") {
        updateTodoText(id, newText);
      }
      // відновлюємо звичайний вигляд
      textWrapper.replaceChild(textElem, input);
    } else if (event.key === "Escape") {
      // Якщо натиснути Escape – просто скасувати
      textWrapper.replaceChild(textElem, input);
    }
  });

  // Якщо клікнути поза input (blur) – просто повертаємо текст, не змінюючи
  input.addEventListener("blur", () => {
    if (textWrapper.contains(input)) {
      textWrapper.replaceChild(textElem, input);
    }
  });

  // Замінимо текстовий елемент на input
  textWrapper.replaceChild(input, textElem);
  input.focus();
  // курсор в кінець
  input.setSelectionRange(input.value.length, input.value.length);
}

function updateTodoText(id, newText) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  saveTodos();
  renderTodos();
}
