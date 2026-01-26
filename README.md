# 💰 SmartBudget

SmartBudget is a modern **Personal Expense and Income Tracking Application built with React and Material UI.
The application allows users to manage their income and expenses through separate pages, view records in organized lists, and filter data by category and date using a clean and user-friendly interface.

---

## 📄 Pages & Features

### ➕ Add Expense

- Add expense name, amount, category, and date
- Dedicated page for expense management
- Uses MUI DatePicker
- Data is saved in localStorage

### ➕ Add Income

- Add income name, amountand date
- Dedicated page for income management
- Uses MUI DatePicker
- Data is saved in localStorage

### 🔍 Filter Records

- Filter expenses by category and date
- Date comparison handled with Day.js

### 🧮 Total

- Automatically calculates total expenses
- Automatically calculates total income
- Displays balance based on income and expenses

### 🧠 State Management

- Global state managed with React Context 
- Avoids prop drilling between components

---

## 🛠️ Technologies Used

- React (Hooks)
- React Router
- Context 
- Material UI (MUI)
- MUI X Date Pickers
- Day.js
- UUID
- LocalStorage

---

## 🎯 Purpose

Practice real-world React patterns such as filtering logic, date handling, and global state management.
