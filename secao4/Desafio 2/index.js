let productValue = Number(prompt('Enter the product value: ')) // Conversão de string para inteiro
if(productValue >= 20) {
    document.getElementById("result").innerHTML = 'Approved'
} else {
    document.getElementById("result").innerHTML = 'Denied'
}

