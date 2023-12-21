const evalBtn = document.querySelector('.page__right__formations')

//    ------- Redirection evaluation étudiant ----------
evalBtn.addEventListener('click', (e) => {
    if(e.target.closest('.page__right__formations__item__evals__item')) {
        window.location.href = '../etudianteval.html'
    } else {
        console.log(e.target);
    }
})