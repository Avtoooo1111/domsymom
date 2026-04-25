// Находим элементы на странице
const modal = document.getElementById('modal');
const btn = document.getElementById('consultBtn');
const closeSpan = document.getElementsByClassName('close')[0];

// Открыть модальное окно при клике на кнопку
btn.onclick = function() {
    modal.style.display = 'block';
}

// Закрыть при клике на крестик
closeSpan.onclick = function() {
    modal.style.display = 'none';
}

// Закрыть при клике в любом месте вне окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Дополнительно: базовая проверка телефона перед отправкой
document.getElementById('consultForm').addEventListener('submit', function(e) {
    const phone = document.getElementById('phone').value;
    const consent = document.getElementById('consent').checked;
    
    if (!phone || phone.trim() === '') {
        e.preventDefault();
        alert('Пожалуйста, укажите номер телефона');
        return false;
    }
    
    if (!consent) {
        e.preventDefault();
        alert('Необходимо согласие на обработку персональных данных');
        return false;
    }
    
    // Если всё ок — форма отправится
    return true;
});
// ===== РАБОТА ВКЛАДОК =====
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const tabId = button.getAttribute('data-tab') + '-content';
        
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// Кнопка "Обсудить ваш проект" из вкладки "Проекты"
const consultBtn2 = document.getElementById('consultBtn2');
if (consultBtn2) {
    consultBtn2.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    });
}
const consultBtn3 = document.getElementById('consultBtn3');
if (consultBtn3) {
    consultBtn3.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    });
}
// Кнопки для новых вкладок
const consultBtn4 = document.getElementById('consultBtn4');
const consultBtn5 = document.getElementById('consultBtn5');

if (consultBtn4) {
    consultBtn4.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    });
}

if (consultBtn5) {
    consultBtn5.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    });
}