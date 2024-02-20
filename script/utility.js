function getElementNumberById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);
    return elementNumber
}

function setElementNumberById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText
}

function getInputFieldTextById(elementId){
    const inputField=document.getElementById(elementId);
    const inputText=inputField.value;
    return inputText
}

function setSeatBg(elementId) {
    const elementField = document.getElementById(elementId)
    elementField.classList.add('bg-[#1DD100]');
    elementField.classList.add('text-white');
}


