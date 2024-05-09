const nav = document.getElementById('nav')
const botaoMenu = document.getElementById('menu')
const opcoesMenu = document.getElementById('opcoes')


botaoMenu.addEventListener('click', () => {
    if (botaoMenu.classList.contains('ativo')) botaoMenu.classList.remove('ativo')
    else botaoMenu.classList.add('ativo')
    if (opcoesMenu.classList.contains('mostrar')) opcoesMenu.classList.remove('mostrar')
    else opcoesMenu.classList.add('mostrar')
})