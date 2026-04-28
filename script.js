javascript
// ===== МОДАЛЬНОЕ ОКНО =====
const modal = document.getElementById('modal');
const closeSpan = document.getElementsByClassName('close')[0];

// Функция открытия модального окна
function openModal() {
    if (modal) modal.style.display = 'block';
}

// Открытие по главной кнопке "Получить консультацию"
const btn = document.getElementById('consultBtn');
if (btn) {
    btn.onclick = openModal;
}

// Закрытие по крестику
if (closeSpan) {
    closeSpan.onclick = function() {
        if (modal) modal.style.display = 'none';
    }
}

// Закрытие по клику вне окна
window.onclick = function(event) {
    if (modal && event.target == modal) {
        modal.style.display = 'none';
    }
}

// ===== ПРОВЕРКА ФОРМЫ =====
const form = document.getElementById('consultForm');
if (form) {
    form.addEventListener('submit', function(e) {
        const phone = document.getElementById('phone');
        const consent = document.getElementById('consent');
        
        if (!phone || !phone.value.trim()) {
            e.preventDefault();
            alert('Пожалуйста, укажите номер телефона');
            return false;
        }
        
        if (!consent || !consent.checked) {
            e.preventDefault();
            alert('Необходимо согласие на обработку персональных данных');
            return false;
        }
        
        return true;
    });
}

// ===== ВСЕ КНОПКИ ЗАКАЗА (единый обработчик) =====
// Список всех ID кнопок, которые открывают модальное окно
const buttonIds = [
    'consultBtn2', 'consultBtn3', 'consultBtn4', 'consultBtn5',
    'consultBtnBanya', 'consultBtnKupel'
];

buttonIds.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener('click', openModal);
    }
});
