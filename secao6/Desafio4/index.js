function formatMoney (value) {
    value = Math.ceil(value * 100) / 100 // sempre trabalha com o ultimo digito
    value = value.toFixed(2)
    return '$' + value
}

function formatSplit(value) {
    if (value == 1) return value + ' pessoa'
    else return value + ' pessoas'
}

function update() {
    // variaveis para os calculos
    let bill = Number(document.getElementById("yourBill").value)
    let tipPercent = Number(document.getElementById('tipInput').value)
    let split = Number(document.getElementById('splitInput').value)

    // calculos matematicos
    let tipValue = (tipPercent/100) * bill
    let totalValue = bill + tipValue
    let billEach = totalValue/split
    let tipEach = tipValue/split

    // elementos de arrastar atualizando no HTML
    document.getElementById('tipPercent').innerHTML = tipPercent + "%"
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    // resultados dos calculos para o HTML
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(totalValue)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
    document.getElementById('tipEach').innerHTML = formatMoney(tipEach)
}