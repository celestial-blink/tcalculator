const handleTheme = (event) => {
    const { currentTarget } = event;
    const elementCalculator = document.getElementById("tcalculator");
    if (currentTarget.checked) {
        elementCalculator.classList.add("dark-mode");
        window.localStorage.setItem("isDarkMode", 1);
    } else {
        elementCalculator.classList.remove("dark-mode");
        window.localStorage.setItem("isDarkMode", 0);
    }
}

const handleStartTheme = event => {
    const elementCalculator = document.getElementById("tcalculator");
    const elementCheckboxTheme = document.getElementById("mode");
    
    const getDarkMode = window.localStorage.getItem("isDarkMode");

    let prepareDarkMode = false;
    if (getDarkMode === null) {
        const mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
        const isDarkMode = mediaQueryObj.matches;
        prepareDarkMode = !!isDarkMode;
    } else {
        prepareDarkMode = !!(getDarkMode * 1);
    }

    if (prepareDarkMode) {
        elementCalculator.classList.add("dark-mode");
        elementCheckboxTheme.checked = true;
    } else {
        elementCalculator.classList.remove("dark-mode");
    }

}

export { handleTheme, handleStartTheme };

