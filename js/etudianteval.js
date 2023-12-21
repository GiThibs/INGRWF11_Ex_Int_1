const formulaire = document.querySelector('.formulaire')
const ctx = document.getElementById('radarChart').getContext('2d')
const btnBefore = document.querySelector('.lastQ')
const btnValid = document.querySelector('.formulaire__form__valid')
const btnAfter = document.querySelector('.nextQ')
const questions = document.querySelectorAll('.formulaire__form__fieldset')
const form = document.querySelector('.formulaire__form')
const chartAff = document.querySelector('.chart')

let dataEval = []
let currentQ = 0

//    ------- Gestion des boutons pour question précédente et suivante ----------
const $btnBefore = () => {
    btnBefore.addEventListener('click', (e) => {
    e.preventDefault()
    if(currentQ >= 1) {
        questions[currentQ].classList.add('hidden')
        currentQ --
        btnAfter.classList.remove('hidden')
        btnValid.classList.add('hidden')
        questions[currentQ].classList.remove('hidden')
        if (currentQ == 0) {
            btnBefore.classList.add('hidden')
        }
    }
})}

$btnBefore()

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
                btnValid.classList.remove('hidden')
            }
        }
    })}

$btnAfter();

let formData
//    ------- Récupère donnée formulaire ----------
form.addEventListener('submit', e => {
  e.preventDefault()
  chartAff.classList.remove('hidden')
  form.classList.add('hidden')
  btnBefore.classList.add('hidden')
  formData = new FormData(form);
  for (var value of formData.values()) {
  dataEval.push(value)
  console.log(dataEval)
}
})

//    ------- Gestion RADAR ----------
const datasets = [{
    label: 'Cible',
    data: [3, 3, 3, 3, 3, 3],
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(125, 125, 125, 1)',
    borderWidth: 1,
    hidden: false
},{
    label: 'Eval. Etu. 1',
    data: dataEval,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(0, 0, 255, 1)',
    borderWidth: 1,
    hidden: false
}]

const chart = new Chart(ctx, {
    type: 'radar',
    data: {
    labels: ['Esprit d\'analyse', 'Curiosité intelectuelle', 'Autonomie', 'Acceptation de la critique', 'Sens de l\'organisation', 'Motivation'],
    datasets
    },
    options: {
    plugins: {
    legend: {
    position: 'top',
    onHover: function(event, legendItem) {
          var index = legendItem.datasetIndex
          var chart = this.chart
          var meta = chart.getDatasetMeta(index)
          console.log("meta",meta)
    meta.hidden = !meta.hidden 
            chart.update();
        },
    labels: {
    boxWidth: 20,
    fontSize: 16,
    padding: 20,
    usePointStyle: true,
    filter: function(legendItem, chartData) {
                return legendItem.datasetIndex < 2;
            }
    }
    }
    },
    scale: {
        ticks: {
            beginAtZero: true,
            max: 4,
          stepSize: 1
        }
    }
    }
    });
