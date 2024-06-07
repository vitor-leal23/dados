function rolarDado(lados) {
    var resultado = Math.floor(Math.random() * lados) + 1;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = resultado;
    resultadoElement.classList.add("animate__animated", "shake"); 

    setTimeout(function() {
        resultadoElement.classList.remove("animate__animated", "shake"); 
    }, 500);
}

document.querySelector('.ball').addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('dark');
}); 