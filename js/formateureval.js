const chartAff = document.querySelector('.chart')
const ranges = document.querySelectorAll('[type="range"]')
const form = document.querySelector('.form')
const ctx = document.getElementById('radarChart').getContext('2d')

let dataEval
let currentQ = 0


let formData
//    ------- Récupère data formulaire ----------
form.addEventListener('submit', e => {
    e.preventDefault();
    formData = new FormData(form);
    dataEval = Array.from(formData.values());
    chart.data.datasets[1].data = dataEval;
    chart.update();
});


//    ------- RADAR ----------
ranges.forEach(range => {
  range.addEventListener('change', e => {
    e.preventDefault()
    console.log(e.target.value)
    document.querySelector(`output[for="${e.target.id}"]`).innerText = e.target.value
  })
})


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
          
          //meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null;
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