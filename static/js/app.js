// Creating PolarChart

function init() {
    d3.json("/race").then(function (PCdata) {

        var race = PCdata.map(d => d.race);
        var count = PCdata.map(d => d.count);

        var ctx = document.getElementById('polarChart');

        new Chart(ctx, {
            data: {
                datasets: [{
                    data: count
                }],
                labels: race
            },
            type: 'polarArea',
            options: {
                title: {
                    display: true,
                    text: `Fatal Encounters with Police: Deceased Civilians by Race`,
                    fontSize: 22,
                },
            },
        })
    })
};
init();