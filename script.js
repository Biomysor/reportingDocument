const lab1Button = document.getElementById('lab1');
const lab1Details = document.getElementById('lab1-details');
const contentDiv = document.getElementById('content');
const lab2Button = document.getElementById('lab2');
const lab2Details = document.getElementById('lab2-details');
const lab3Button = document.getElementById('lab3');
const lab3Details = document.getElementById('lab3-details');
const lab4Button = document.getElementById('lab4');
const lab4Details = document.getElementById('lab4-details');
const lab5Button = document.getElementById('lab5');
const lab5Details = document.getElementById('lab5-details');
const lab6Button = document.getElementById('lab6');
const lab6Details = document.getElementById('lab6-details');
const lab7Button = document.getElementById('lab7');
const lab7Details = document.getElementById('lab7-details');
const lab8Button = document.getElementById('lab8');
const lab8Details = document.getElementById('lab8-details');
// Функція для відображення тексту, посилання та зображень
function displayContent(text, link, photo1, photo2) {
    contentDiv.innerHTML = ''; // Очищаємо вміст

    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    paragraph.style.textAlign = 'center'; // Центруємо текст
    contentDiv.appendChild(paragraph);

    if (link) {
        const aLink = document.createElement('a');
        aLink.href = link;
        aLink.textContent = 'Посилання';
        aLink.target = '_blank';
        aLink.style.display = 'block';
        aLink.style.textAlign = 'center';
        contentDiv.appendChild(aLink);
    }

    if (photo1) {
        const scrin1 = document.createElement('img');
        scrin1.src = photo1;
        scrin1.alt = 'Скріншот 1';
        scrin1.style.display = 'block';
        scrin1.style.margin = '20px auto';
        contentDiv.appendChild(scrin1);
    }

    if (photo2) {
        const scrin2 = document.createElement('img');
        scrin2.src = photo2;
        scrin2.alt = 'Скріншот 2';
        scrin2.style.display = 'block';
        scrin2.style.margin = '20px auto';
        scrin2.style.width='1000px';
        contentDiv.appendChild(scrin2);
    }
}

// Обробники для кнопок лабораторних робіт
lab1Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab2Details.classList.add('hidden');
    lab3Details.classList.add('hidden');
    lab4Details.classList.add('hidden');
    lab5Details.classList.add('hidden');
    lab6Details.classList.add('hidden');
    lab7Details.classList.add('hidden');
    lab8Details.classList.add('hidden');
    lab1Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});

lab2Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab1Details.classList.add('hidden');
    lab3Details.classList.add('hidden');
    lab4Details.classList.add('hidden');
    lab5Details.classList.add('hidden');
    lab6Details.classList.add('hidden');
    lab7Details.classList.add('hidden');
    lab8Details.classList.add('hidden');
    lab2Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});

lab3Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab1Details.classList.add('hidden');
    lab2Details.classList.add('hidden');
    lab4Details.classList.add('hidden');
    lab5Details.classList.add('hidden');
    lab6Details.classList.add('hidden');
    lab7Details.classList.add('hidden');
    lab8Details.classList.add('hidden');
    lab3Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});

lab4Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab1Details.classList.add('hidden');
    lab2Details.classList.add('hidden');
    lab5Details.classList.add('hidden');
    lab3Details.classList.add('hidden');
    lab6Details.classList.add('hidden');
    lab7Details.classList.add('hidden');
    lab8Details.classList.add('hidden');
    lab4Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});

lab5Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab1Details.classList.add('hidden');
    lab2Details.classList.add('hidden');
    lab3Details.classList.add('hidden');
    lab4Details.classList.add('hidden');
    lab6Details.classList.add('hidden');
    lab7Details.classList.add('hidden');
    lab8Details.classList.add('hidden');
    lab5Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});
lab6Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab1Details.classList.add('hidden');
    lab2Details.classList.add('hidden');
    lab3Details.classList.add('hidden');
    lab4Details.classList.add('hidden');
    lab5Details.classList.add('hidden');
    lab7Details.classList.add('hidden');
    lab8Details.classList.add('hidden');
    lab6Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});
lab7Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab1Details.classList.add('hidden');
    lab2Details.classList.add('hidden');
    lab3Details.classList.add('hidden');
    lab4Details.classList.add('hidden');
    lab5Details.classList.add('hidden');
    lab6Details.classList.add('hidden');
    lab8Details.classList.add('hidden');
    lab7Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});
lab8Button.addEventListener('click', function(event) {
    event.preventDefault();
    lab1Details.classList.add('hidden');
    lab2Details.classList.add('hidden');
    lab3Details.classList.add('hidden');
    lab4Details.classList.add('hidden');
    lab5Details.classList.add('hidden');
    lab6Details.classList.add('hidden');
    lab7Details.classList.add('hidden');
    lab8Details.classList.toggle('hidden');
    contentDiv.innerHTML = '';
});
lab1Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
       
        displayContent(text, link); // Відображаємо два зображення
    }
});
lab2Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
       
        displayContent(text, link); // Відображаємо два зображення
    }
});
lab3Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
       
        displayContent(text, link); // Відображаємо два зображення
    }
});
lab4Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
        const photo1 = event.target.getAttribute('data-photo1');
        displayContent(text, link,photo1); // Відображаємо два зображення
    }
});
lab5Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
        const photo1 = event.target.getAttribute('data-photo1');  // Перше зображення
        const photo2 = event.target.getAttribute('data-photo2');  // Друге зображення

        displayContent(text, link, photo1, photo2); // Відображаємо два зображення
    }
});
lab6Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
        const photo1 = event.target.getAttribute('data-photo1');  // Перше зображення
        const photo2 = event.target.getAttribute('data-photo2');  // Друге зображення

        displayContent(text, link, photo1, photo2); // Відображаємо два зображення
    }
});
lab7Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
        const photo1 = event.target.getAttribute('data-photo1');  // Перше зображення
        const photo2 = event.target.getAttribute('data-photo2');  // Друге зображення

        displayContent(text, link, photo1, photo2); // Відображаємо два зображення
    }
});
lab8Details.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text');
        const link = event.target.getAttribute('data-link');
        const photo1 = event.target.getAttribute('data-photo1');  // Перше зображення
        const photo2 = event.target.getAttribute('data-photo2');  // Друге зображення

        displayContent(text, link, photo1, photo2); // Відображаємо два зображення
    }
});

