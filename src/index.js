//calulator element
import './views/calulator/styles.pcss';
import templateCalculator from './views/calulator/index.html?raw';

//calculator theme event
import handleTheme from './scripts/theme';
import handleClick from './scripts/buttons';

const startApp = () => {
    document.getElementById("app").innerHTML = templateCalculator;
    document.getElementById("mode").addEventListener('change', handleTheme);
    document.getElementById("tcalculator__buttons").addEventListener('click', handleClick);
}

document.addEventListener('DOMContentLoaded',()=>{
    startApp();
});