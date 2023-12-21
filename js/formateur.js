let etuds = document.querySelector('.listeetudiants')
let addetud = document.querySelector('.addetudiant')
let etudtoadd = document.querySelector('.etudtoadd')
let etudiants = []
let templateetud = ``
let listeEvalEl = document.querySelector('.listeevalsession')
let btncreatesession = document.querySelector('.btncreatesession')
let btnaddsession = document.querySelector('.page__right__createsession__btn')
let formsession = document.querySelector('.formtoaddsession')




//    ------- Affiche/Enlève le formulaire pour ajouter une session ----------
btnaddsession.addEventListener('click', (e) => {
    formsession.classList.toggle('hidden')
})

//    ------- Redirection vers evaluation formateur ----------
listeEvalEl.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('evalcase')) {
        window.location.href = '../formateureval.html'
    } else {
        return
    }
})


//    ------- Affiche liste étudiants invités ----------
addetud.addEventListener('click', (e) => {
    e.preventDefault()
    if(etudtoadd.value == ""){
        alert('Veuillez rentrez une adresse email valide :)')
    } else {
        console.log(etudtoadd.value)
        etudiants.push(etudtoadd.value)
        etuds.innerHTML = templateetud
        etudiants.forEach(etud => {
            templateetud +=`
            <li class="listeetudiants__el">${etud}</li>
            `
        })
        etuds.innerHTML = templateetud
        templateetud = ``
    }
    etudtoadd.value = ""
})

//    ------- Création session ----------
btncreatesession.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)

    // créer le formdata()
})

