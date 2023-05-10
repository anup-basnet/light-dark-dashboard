const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');


const setColorMode = () => {
    if(localStorage.getItem('colorMode') == 'dark') {
        setDarkMode(); 
        darkButton.click();
    } else if(localStorage.getItem('colorMode') == 'light'){
        setLightMode();
        lightButton.click();
    }
}

const checkMode = () => {
    if(localStorage.getItem('colorMode') == null) {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            lightButton.click();
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            darkButton.click();
        }
    }

}

const checkModeChange = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        checkMode();
    })
}

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark'
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light'
}

setColorMode();
checkMode();
checkModeChange();

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        if(darkButton.checked) {
            setDarkMode();
            localStorage.setItem('colorMode', 'dark')
        } else {
            setLightMode();
            localStorage.setItem('colorMode', 'light')
        }
    })
})
