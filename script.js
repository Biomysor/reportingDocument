const lab1Button = document.getElementById('lab1');
const lab1Details = document.getElementById('lab1-details');
const contentDiv = document.getElementById('content'); 
const lab2Button = document.getElementById('lab2');
const lab2Details = document.getElementById('lab2-details');

lab1Button.addEventListener('click', function (event) {
    lab2Details.classList.add('hidden1')
    event.preventDefault(); 


    lab1Details.classList.toggle('hidden');
    contentDiv.innerHTML = ''; 
});

lab2Button.addEventListener('click', function (event) {
    lab1Details.classList.add('hidden')
    event.preventDefault(); 


    lab2Details.classList.toggle('hidden1');
    contentDiv.innerHTML = ''; 
});

lab1Details.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const text = event.target.getAttribute('data-text'); 

       
        contentDiv.innerHTML = '';


        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        contentDiv.appendChild(paragraph);

  
        if (text.includes('Тема')) {
            const link = document.createElement('a');
            link.href = 'https://github.com/Biomysor/IC-33_Chulii_Lab-1';
            link.textContent = 'посилання';
            link.target = '_blank'; 
            contentDiv.appendChild(link);
        }
    }
});

