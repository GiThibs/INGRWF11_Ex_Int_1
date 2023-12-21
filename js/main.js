const formLogin = document.querySelector('.form_login')
const loginField = document.getElementById('login')
const passField = document.getElementById('pass')


formLogin.addEventListener('submit', e =>{
    e.preventDefault()
    console.log(e.target)
    const dataLogin = {}
    dataLogin.username = loginField.value
    dataLogin.password = passField.value
    const jsonDataLogin = JSON.stringify(dataLogin);
    console.log(jsonDataLogin)

    fetch('https://cepegra-frontend.xyz/wf11-2/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonDataLogin,
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            sessionStorage.setItem('token', data.token);
            console.log('Token stocké avec succès dans la session storage');
            window.location.href = '../formateur.html'
        } else {
            console.error('Aucun token reçu dans la réponse');
        }
    })
    .catch(error => console.error('Erreur lors de la requête:', error));
})