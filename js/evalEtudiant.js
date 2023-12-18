const btnBefore = document.querySelector('.lastQ')
const btnAfter = document.querySelector('.nextQ')
const questions = document.querySelectorAll('.formulaire__form__fieldset')
let currentQ = 0

const $btnBefore = () => {
    btnBefore.addEventListener('click', (e) => {
    e.preventDefault()
    if(currentQ >= 1) {
        questions[currentQ].classList.add('hidden')
        currentQ --
        btnAfter.classList.remove('hidden')
        questions[currentQ].classList.remove('hidden')
        if (currentQ == 0) {
            btnBefore.classList.add('hidden')
            //btnSubmit.classList.remove('hidden')
        }
    }
})}
const $btnAfter = () => {
    btnAfter.addEventListener('click', (e) => {
    e.preventDefault()
    if (currentQ < questions.length-1) {
        questions[currentQ].classList.add('hidden')
        currentQ ++
        btnBefore.classList.remove('hidden')
        questions[currentQ].classList.remove('hidden')
        if(currentQ == questions.length-1) {
            btnAfter.classList.add('hidden')
            //btnSubmit.classList.remove('hidden')
        }
    }
})}


export default {$btnBefore};
export {$btnAfter, $btnBefore}