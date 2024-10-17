// Отримуємо елемент кнопки Лабораторна робота №1 та деталі
const lab1Button = document.getElementById('lab1');
const lab1Details = document.getElementById('lab1-details');

// Додаємо обробник події натискання
lab1Button.addEventListener('click', function (event) {
    event.preventDefault(); // Забороняємо перезавантаження сторінки при натисканні

    // Перемикаємо видимість блоку з деталями
    if (lab1Details.classList.contains('hidden')) {
        lab1Details.classList.remove('hidden');
    } else {
        lab1Details.classList.add('hidden');
    }
});
