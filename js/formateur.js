let etuds = document.querySelector('.listeetudiants')
let addetud = document.querySelector('.addetudiant')
let etudtoadd = document.querySelector('.etudtoadd')
let etudiants = []
let templateetud = ``

let btncreatesession = document.querySelector('.btncreatesession')
let formsession = document.querySelector('.formtoaddsession')


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

btncreatesession.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target)

    // create le formdata()
})

