// Mengubah warna latar belakang
const backgroundColorSelect = document.getElementById('background-color');
backgroundColorSelect.addEventListener('change', function () {
    document.body.style.backgroundColor = backgroundColorSelect.value;
});

// Mengubah ukuran font
const fontSizeInput = document.getElementById('font-size');
fontSizeInput.addEventListener('input', function () {
    document.body.style.fontSize = fontSizeInput.value + 'px';
});

// Mengubah mode gelap/terang
const darkModeToggle = document.getElementById('dark-mode-toggle');
let isDarkMode = false;

darkModeToggle.addEventListener('click', function () {
    // Periksa status mode gelap
    if (isDarkMode) {
        // Mengubah kembali ke mode terang
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        darkModeToggle.textContent = 'Switch to Dark Mode';
    } else {
        // Mengubah ke mode gelap
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        darkModeToggle.textContent = 'Switch to Light Mode';
    }
    // Beralih status mode gelap
    isDarkMode = !isDarkMode;
});

// Mengubah gaya font
const fontStyleSelect = document.getElementById('font-style');
fontStyleSelect.addEventListener('change', function () {
    document.body.style.fontFamily = fontStyleSelect.value;
});

// Menambahkan to-do list
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function () {
    const task = taskInput.value;
    if (task.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});