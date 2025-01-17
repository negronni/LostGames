document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Inicia a animação de transição
        document.querySelector('.login-container').classList.add('hide');

        // Redireciona para a página home após 1 segundo
        setTimeout(function() {
            window.location.href = 'C:/Users/marlene/Desktop/Sistema/Home/home.html'; // Substitua com o caminho correto da página home
        }, 500); // Tempo para a animação de transição
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
