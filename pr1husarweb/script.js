// ======================= Допоміжна функція =======================
function prettyPrint(value) {
  return JSON.stringify(value, null, 2);
}

// ======================= ЗАВДАННЯ 1 =======================
const products = [
  { name: "Laptop", category: "Electronics", price: 30000, inStock: 5 },
  { name: "Mouse", category: "Electronics", price: 800, inStock: 0 },
  { name: "Chair", category: "Furniture", price: 1500, inStock: 12 },
  { name: "Desk", category: "Furniture", price: 5000, inStock: 3 },
  { name: "Headset", category: "Electronics", price: 2000, inStock: 0 },
  { name: "Notebook", category: "Stationery", price: 50, inStock: 100 }
];

// filter()
function getAvailableProducts(arr) {
  return arr.filter(p => p.inStock > 0);
}

// find()
function findProductByName(arr, name) {
  const product = arr.find(p => p.name.toLowerCase() === name.toLowerCase());
  return product || "Товар не знайдено";
}

// Кнопки:
function handleGetAvailableProducts() {
  document.getElementById("task1Output").textContent =
    prettyPrint(getAvailableProducts(products));
}

function handleFindProductByName() {
  const name = document.getElementById("productNameInput").value;
  document.getElementById("task1Output").textContent =
    prettyPrint(findProductByName(products, name));
}

// ======================= ЗАВДАННЯ 2 =======================
const students = [
  { name: "Іван", age: 19, grade: 85, group: "IPZ-11" },
  { name: "Олена", age: 20, grade: 92, group: "IPZ-12" },
  { name: "Максим", age: 18, grade: 74, group: "IPZ-11" },
  { name: "Анна", age: 19, grade: 88, group: "IPZ-13" },
  { name: "Петро", age: 21, grade: 67, group: "IPZ-12" },
  { name: "Юлія", age: 20, grade: 95, group: "IPZ-13" }
];

// reduce(), push()
function groupBy(arr) {
  return arr.reduce((groups, student) => {
    if (!groups[student.group]) groups[student.group] = [];
    groups[student.group].push(student);
    return groups;
  }, {});
}

// sort()
function sortStudentsByGrade(arr) {
  return [...arr].sort((a, b) => b.grade - a.grade);
}

function handleGroupBy() {
  document.getElementById("task2Output").textContent =
    prettyPrint(groupBy(students));
}

function handleSortStudentsByGrade() {
  document.getElementById("task2Output").textContent =
    prettyPrint(sortStudentsByGrade(students));
}

// ======================= ЗАВДАННЯ 3 =======================
const employees = [
  { name: "Andrii", position: "Developer", salary: 45000, years: 3 },
  { name: "Maria", position: "QA Engineer", salary: 35000, years: 5 },
  { name: "Oksana", position: "PM", salary: 60000, years: 7 },
  { name: "Serhii", position: "DevOps", salary: 55000, years: 4 },
  { name: "Ihor", position: "Analyst", salary: 40000, years: 6 }
];

// reduce()
function getAverageSalary(arr) {
  const sum = arr.reduce((acc, emp) => acc + emp.salary, 0);
  return sum / arr.length;
}

function findMostExperiencedEmployee(arr) {
  return arr.reduce((max, emp) =>
    emp.years > max.years ? emp : max
  );
}

function handleGetAverageSalary() {
  document.getElementById("task3Output").textContent =
    "Середня зарплата: " + getAverageSalary(employees).toFixed(2) + " грн";
}

function handleFindMostExperiencedEmployee() {
  document.getElementById("task3Output").textContent =
    prettyPrint(findMostExperiencedEmployee(employees));
}

// ======================= ЗАВДАННЯ 4 =======================
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, rating: 4.8, isRead: true },
  { title: "1984", author: "George Orwell", year: 1949, rating: 4.6, isRead: true },
  { title: "The Silmarillion", author: "J.R.R. Tolkien", year: 1977, rating: 4.2, isRead: false },
  { title: "Harry Potter 1", author: "J.K. Rowling", year: 1997, rating: 4.7, isRead: true },
  { title: "Harry Potter 2", author: "J.K. Rowling", year: 1998, rating: 4.4, isRead: false },
  { title: "Sci-Fi Book", author: "Anon Author", year: 2015, rating: 3.9, isRead: false }
];

// reduce()
function getUnreadBooks(arr) {
  return arr.reduce((unread, book) => {
    if (!book.isRead) unread.push(book.title);
    return unread;
  }, []);
}

// filter(), sort()
function getBooksByAuthor(arr, author) {
  return arr
    .filter(b => b.author.toLowerCase() === author.toLowerCase())
    .sort((a, b) => a.year - b.year);
}

// filter(), sort()
function getTopRatedBooks(arr) {
  return arr
    .filter(b => b.rating > 4)
    .sort((a, b) => b.rating - a.rating);
}

function handleGetUnreadBooks() {
  document.getElementById("task4Output").textContent =
    prettyPrint(getUnreadBooks(books));
}

function handleGetBooksByAuthor() {
  const author = document.getElementById("authorInput").value;
  document.getElementById("task4Output").textContent =
    prettyPrint(getBooksByAuthor(books, author));
}

function handleGetTopRatedBooks() {
  document.getElementById("task4Output").textContent =
    prettyPrint(getTopRatedBooks(books));
}

// ======================= ІНІЦІАЛІЗАЦІЯ ВИВОДУ =======================
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("productsPreview").textContent = prettyPrint(products);
  document.getElementById("studentsPreview").textContent = prettyPrint(students);
  document.getElementById("employeesPreview").textContent = prettyPrint(employees);
  document.getElementById("booksPreview").textContent = prettyPrint(books);
});
