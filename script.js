function rolarDado(lados) {
    var resultado = Math.floor(Math.random() * lados) + 1;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = resultado;
    resultadoElement.classList.add("animate__animated", "shake"); 

    setTimeout(function() {
        resultadoElement.classList.remove("animate__animated", "shake"); 
    }, 500);
}

const equations = [
    "1",
    "1",
    "2",
    "2",
    "3",
    "3",
    "4",
    "4",
    "5",
    "5",
    "6",
    "6",
    "7",
    "7",
    "8",
    "9",
    "10",
    "d20",
    "d15",
    "d100",
    "d30",
    "12",
    "rpg",
    "rpg"
];

const equationContainer = document.getElementById('equations');

equations.forEach((equation, index) => {
    const equationElement = document.createElement('div');
    equationElement.classList.add('equation');
    equationElement.textContent = equation;
    equationElement.style.left = `${Math.random() * 100}vw`;
    equationElement.style.animationDuration = `${Math.random() * 8 + 4}s`; 
    equationContainer.appendChild(equationElement);
});
