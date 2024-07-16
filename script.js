document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('changeColorButton');
    const div = document.getElementById('colorDiv');

    button.addEventListener('dblclick', () => {
        div.style.backgroundColor = 'green';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('dblclick', () => {
        console.log('Элемент был дважды щелкнут!');
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.getElementById('myTable');
    
    table.addEventListener('dblclick', (event) => {
        const target = event.target;
        
        if (target.tagName === 'TD') {
            target.textContent = 'Дважды щелкнул!';
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('img');
    
    images.forEach(image => {
        image.addEventListener('dblclick', () => {
            console.log(image.alt);
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const header = document.getElementById('pageHeader');

    header.addEventListener('dblclick', () => {
        header.textContent = 'Double clicked!';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('clickButton');

    button.addEventListener('click', () => {
        console.log('Кнопка была нажата!');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', (event) => {
        console.log(`Нажата клавиша: ${event.key}`);
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('promptButton');

    button.addEventListener('click', () => {
        const userInput = prompt('Пожалуйста, введите строку:');
        if (userInput !== null) {
            console.log(`Введенная строка: ${userInput}`);
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keyup', (event) => {
        console.log(`Отпущена клавиша: ${event.key}`);
    });
});

