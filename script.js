const display = document.querySelector('#display')
const botoes = document.querySelectorAll('button')

botoes.forEach(botao => {
    botao.addEventListener('click',() => {
        const valor = botao.textContent.trim()

        if(valor === 'AC'){
            display.value = ''
            return
        } if (valor === '='){
            display.value = eval(display.value)
            return
        }
        display.value += valor
    })
})

