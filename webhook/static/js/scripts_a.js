document.addEventListener('DOMContentLoaded', function() {

    // Funcionalidade da barra lateral
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle i');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            toggleButton.classList.replace('fa-chevron-right', 'fa-chevron-left');
        } else {
            toggleButton.classList.replace('fa-chevron-left', 'fa-chevron-right');
        }
    });

    //================ Line chart With Multiple Lines ================//

    var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    new Chart("multipleLineChart", {
        labels: 'Multiple Line Chart',
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                label: 'India',
                data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
                borderColor: "red",
                fill: false
            }, {
                label: 'US',
                data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                borderColor: "green",
                fill: false
            }, {
                label: 'China',
                data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
                borderColor: "blue",
                fill: false
            }]
        },
        options: {
            responsive: true, // Garante que o gráfico é responsivo
            legend: { display: false }
        }
    });

    //============== Bar Chart Single Dataset ================//

    var xValuesBarSingle = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValuesBarSingle = [55, 49, 44, 24, 15];
    var barColors = ["red", "green", "blue", "orange", "brown"];

    new Chart("barSingleChart", {
        type: "bar",
        data: {
            labels: xValuesBarSingle,
            datasets: [{
                backgroundColor: barColors,
                data: yValuesBarSingle
            }]
        },
        options: {}
    });


    //================ Line chart With SINGLE Line ================//

    const labelsLine = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];

    const dataLine = {
        labels: labelsLine,
        datasets: [{
            label: 'Products',
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.1)",
            data: [0, 10, 5, 2, 20, 30, 45],

        }]
    };

    const config = {
        type: 'line',
        data: dataLine,
        options: {}
    };

    const lineChart = new Chart(
        document.getElementById('lineChart'),
        config
    );

    //============== Pie Chart Single Dataset ============

    var xValuesPieChart = ["Crome", "Firefox", "Safari", "Android", "Internet Explorer"];
    var yValuesPieChart = [55, 49, 44, 24, 15];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
    ];

    new Chart("pieChart", {
        type: "pie",
        data: {
            labels: xValuesPieChart,
            datasets: [{
                backgroundColor: barColors,
                data: yValuesPieChart
            }]
        },
        options: {
            title: {
                display: true,
                text: "Production 2022"
            }
        }
    });

    //============== Bar Chart Multiple Datasets ============

    const dataBar = [{ x: 'Jan', net: 100, cogs: 50, gm: 50 }, { x: 'Feb', net: 120, cogs: 55, gm: 75 }];
    const configBar = {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb'],
            datasets: [{
                label: 'Net sales',
                data: dataBar,
                parsing: {
                    yAxisKey: 'net'
                }
            }, {
                label: 'COGS',
                data: dataBar,
                parsing: {
                    yAxisKey: 'cogs'
                }
            }, {
                label: 'GM',
                data: dataBar,
                parsing: {
                    yAxisKey: 'gm'
                }
            }]
        },
        options: {
            indexAxis: 'x',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    };

    const barChart = new Chart(
        document.getElementById('barChart'),
        configBar
    );
});
