const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const colorSelected = document.querySelector('.color')

// gera numero randomico
function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}

// no clique troca o fundo e o nome da cor
btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    colorSelected.textContent = colors[randomColor]
})