document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Função para alternar o tema
    function toggleTheme() {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.classList.remove(currentTheme);
        document.body.classList.add(newTheme);
        
        // Armazenar o novo tema no localStorage
        localStorage.setItem('theme', newTheme);
    }

    // Carregar o tema armazenado
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.body.classList.add(storedTheme);
    } else {
        document.body.classList.add('light'); // Tema padrão
    }

    themeToggleBtn.addEventListener('click', toggleTheme);
});
