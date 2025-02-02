function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (!username || !password) {
        messageElement.textContent = 'Всі поля обов\'язкові!';
        return;
    }

    const users = getUsers();
    if (users.some(user => user.username === username)) {
        messageElement.textContent = 'Цей користувач вже зареєстрований!';
        return;
    }

    users.push({ username, password });
    saveUsers(users);

    messageElement.textContent = 'Реєстрація успішна! Перенаправлення...';

    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
});
