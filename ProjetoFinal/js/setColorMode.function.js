/** Using Bootstrap 5.3 color mode to light/dark theme colors mode  */
export function setColorMode() {
    let colorModeButton = document.getElementById('bd-theme');

    colorModeButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-bs-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        let forcaStroke = document.getElementById('forca');
        if (theme === 'dark') { 
            forcaStroke.classList.add('stroke-night')
            forcaStroke.classList.remove('stroke-day')
        } else {
            forcaStroke.classList.remove('stroke-night')
            forcaStroke.classList.add('stroke-day')
        }
    });
}