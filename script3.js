function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    let currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.className = currentTheme + '-theme';

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';

        document.documentElement.classList.remove(isDark ? 'dark-theme' : 'light-theme');
        document.documentElement.classList.add(newTheme + '-theme');

        localStorage.setItem('theme', newTheme);

        themeToggle.textContent = newTheme === 'dark' ? '🌓' : '🌒';
    });

    themeToggle.textContent = currentTheme === 'dark' ? '🌓' : '🌒';

    prefersDarkScheme.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.className = newTheme + '-theme';
            themeToggle.textContent = newTheme === 'dark' ? '🌓' : '🌒';
        }
    });
}