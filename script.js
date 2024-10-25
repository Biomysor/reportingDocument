const lab1Button = document.getElementById('lab1');
const lab1Details = document.getElementById('lab1-details');
const contentDiv = document.getElementById('content'); 
const lab2Button = document.getElementById('lab2');
const lab2Details = document.getElementById('lab2-details');
const lab3Button = document.getElementById('lab3');
const lab3Details = document.getElementById('lab3-details');
// Функція для відображення тексту та посилання
function displayContent(text, link) {
    contentDiv.innerHTML = ''; // Очищаємо вміст

    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.style.textAlign = 'center'; // Центруємо текст
    contentDiv.appendChild(paragraph);

    if (link) {
        const aLink = document.createElement('a');
        aLink.href = link;
        aLink.textContent = 'посилання';
        aLink.target = '_blank'; 
        aLink.style.display = 'block'; // Розміщуємо посилання на новому рядку
        aLink.style.textAlign = 'center'; // Центруємо посилання
        contentDiv.appendChild(aLink);
    }
}

// Обробник для лабораторної роботи 1
lab1Button.addEventListener('click', function (event) {
    event.preventDefault(); 
    lab2Details.classList.add('hidden');
    lab3Details.classList.add('hidden'); // Ховаємо деталі 2 лабораторної роботи
    lab1Details.classList.toggle('hidden'); // Перемикаємо видимість деталей 1 лабораторної роботи
    contentDiv.innerHTML = ''; // Очищаємо вміст
});

// Обробник для лабораторної роботи 2
lab2Button.addEventListener('click', function (event) {
    event.preventDefault(); 
    lab1Details.classList.add('hidden');
    lab3Details.classList.add('hidden'); // Ховаємо деталі 1 лабораторної роботи
    lab2Details.classList.toggle('hidden'); // Перемикаємо видимість деталей 2 лабораторної роботи
    contentDiv.innerHTML = ''; // Очищаємо вміст
});

lab3Button.addEventListener('click', function (event) {
    event.preventDefault(); 
    lab1Details.classList.add('hidden');
    lab2Details.classList.add('hidden'); // Ховаємо деталі 2 лабораторної роботи
    lab3Details.classList.toggle('hidden'); // Перемикаємо видимість деталей 1 лабораторної роботи
    contentDiv.innerHTML = ''; // Очищаємо вміст
});
// Обробник для кнопок в деталях лабораторної роботи 1
lab1Details.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text'); 
        const link = event.target.getAttribute('data-link'); // Постійне посилання для лаби 1
        displayContent(text, link);
    }
});

// Обробник для кнопок в деталях лабораторної роботи 2
lab2Details.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text'); 
        const link = event.target.getAttribute('data-link'); // Отримуємо посилання з кнопки
        displayContent(text, link);
    }
});
lab3Details.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text'); 
        const link = event.target.getAttribute('data-link'); // Постійне посилання для лаби 1
        displayContent(text, link);
    }
});
