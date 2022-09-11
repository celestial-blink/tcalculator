const handleTheme = (event) => {
    const { currentTarget } = event;
    const elementCalculator = document.getElementById("tcalculator");
    if (currentTarget.checked) {
        elementCalculator.classList.add("dark-mode");
    } else {
        elementCalculator.classList.remove("dark-mode");
    }
    
}

export default handleTheme;