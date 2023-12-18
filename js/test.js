const test = document.querySelector('.test')

const fctTest = () => {
    test.addEventListener('click', (e) => {
    console.log(e.target)
})}
export default fctTest