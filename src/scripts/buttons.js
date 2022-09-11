const handleClick = (event) => {
    const { target } = event;
    const { tagName, dataset } = target;
    const characterFilter = new RegExp("[0-9\(\)\c\%\/\*\\-\+\.\_\c]", "g");
    const elementResult = document.getElementById("result");

    //result
    if (dataset.op === "=") {
        try {
            document.getElementById("operation").textContent = elementResult.textContent;
            elementResult.textContent = eval(elementResult.textContent);
        } catch (error) {
            elementResult.style.color = "red";
            console.log(error)
        } finally {
            return;
        }
    }
    //remove
    if (!!elementResult.getAttribute("style")) {
        elementResult.removeAttribute("style");
    }

    //delete
    if (dataset.op === "_") {
        let content = elementResult.textContent;
        if (!!content) {
            elementResult.textContent = content.slice(0, -1);
        }
        return;
    }

    //reset
    if ((dataset?.op?.toLowerCase() ?? "") === "c") {
        elementResult.textContent = "";
        return;
    }
    //input buttons
    if (tagName === "BUTTON" && characterFilter.test(dataset.op)) {
        const especialCharacters = ["/", ".", "*", "+", "-", "%"];
        if (especialCharacters.includes(dataset.op) && (elementResult.textContent.slice(-1) === dataset.op)) {
            return;
        }
        elementResult.textContent += dataset.op;
    }
}

export default handleClick;