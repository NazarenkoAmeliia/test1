// Устанавливаем стили для body
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#e6f5e9";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";
document.body.style.textAlign = "center";

// Создаем заголовок
const title = document.createElement('h1');
title.textContent = "Природа — це душа України 🌿";
title.style.color = "#2f5d34";
title.style.marginBottom = "20px";
document.body.appendChild(title);

// Создаем изображение
const img = document.createElement('img');
img.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80";
img.alt = "Красива природа";
img.style.maxWidth = "90%";
img.style.height = "auto";
img.style.borderRadius = "12px";
img.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
document.body.appendChild(img);

// Создаем параграф
const paragraph = document.createElement('p');
paragraph.textContent = "Этот сайт создан с помощью чистого JavaScript!";
paragraph.style.color = "#333";
document.body.appendChild(paragraph);

// Создаем кнопку
const button = document.createElement('button');
button.textContent = "Нажми на меня";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.backgroundColor = "#4CAF50";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.marginTop = "20px";
document.body.appendChild(button);

// Добавляем обработчик события для кнопки
button.addEventListener('click', function () {
    alert("Спасибо за нажатие!");
});
