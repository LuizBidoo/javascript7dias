

function outcome() {
    
    let num1 = Number(document.getElementById('num-one').value) // pega o valor do que está na caixa de id num-one e guarda em num1
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0

    if (document.getElementById('box1').checked) // verifica se o + está marcado
        total = num1 + num2
    else if (document.getElementById('box2').checked)
        total = num1 - num2
    else if (document.getElementById('box3').checked)
        total = num1 * num2
    else if (document.getElementById('box4').checked)
        total = num1/num2
    document.getElementById("resultArea").innerHTML = "Result: " + String(total)
}