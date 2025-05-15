function toCadastro(){
    const slider = document.querySelector('.slider')
    slider.classList.remove('Esquerda')
    slider.classList.add('Direita')
    
    const formCadastro = document.querySelector('#cadastro')
    const formLogin = document.querySelector('#login')
    formLogin.classList.remove('active')
    formCadastro.classList.add('active')

    const titleToCadastro = document.querySelector('.titleForm')
    titleToCadastro.textContent = "CADASTRO" 

}
function toLogin(){
    const slider = document.querySelector('.slider')
    slider.classList.remove('Direita')
    slider.classList.add('Esquerda')

    const formLogin = document.querySelector('#login')
    const formCadastro = document.querySelector('#cadastro')
    formCadastro.classList.remove('active')
    formLogin.classList.add('active')

    const titleToLogin = document.querySelector('.titleForm')
    titleToLogin.textContent = "LOGIN" 
}

