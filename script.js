// ===== ПРОВЕРКА СУЩЕСТВОВАНИЯ МОДАЛЬНОГО ОКНА =====
const modal = document.getElementById('modal');
if (!modal) {
    console.warn('Модальное окно не найдено на этой странице');
}

const closeSpan = modal ? document.getElementsByClassName('close')[0] : null;

// Функция открытия модального окна
function openModal() {
    if (modal) {
        modal.style.display = 'block';
    } else {
        alert('Форма временно недоступна. Пожалуйста, свяжитесь по телефону +7 (981) 973-83-43');
    }
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