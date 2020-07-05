function plotAges() {
    d3.json("http://localhost:5000/ages").then(function (data) {
        var age = data.map(d => d.age);
        var count = data.map(d => d.count);

        var trace = {
            type: "bar",
            x: age,
            y: count
        }

        var data = [trace];

        // var layout = {
        //     title: "",

        // }
        Plotly.newPlot("bar", data);
    })
}
plotAges();

function plotStates() {
    d3.json("http://localhost:5000/states").then(function (data) {
        var state = data.map(d => d.state);
        var count = data.map(d => d.count);

        var trace = {
            type: "bar",
            x: state,
            y: count
        }

        var data = [trace];

        // var layout = {
        //     title: "",

        // }
        Plotly.newPlot("bar", data);
    })
}
// plotStates();

function plotYears() {
    d3.json("http://localhost:5000/years").then(function (data) {
        var year = data.map(d => d.year);
        var count = data.map(d => d.count);

        var trace = {
            type: "bar",
            x: year,
            y: count
        }

        var data = [trace];

        // var layout = {
        //     title: "",

        // }
        Plotly.newPlot("bar", data);
    })
}
// plotYears();

function plotIllness() {
    d3.json("http://localhost:5000/illness").then(function (data) {
        var illness = data.map(d => d.mental_illness);
        var count = data.map(d => d.count);

        var trace = {
            type: "bar",
            x: illness,
            y: count
        }

        var data = [trace];

        // var layout = {
        //     title: "",

        // }
        Plotly.newPlot("bar", data);
    })
}
// plotIllness();

function plotGenders() {
    d3.json("http://localhost:5000/gender").then(function (data) {
        var gender = data.map(d => d.gender);
        var count = data.map(d => d.count);

        var trace = {
            type: "bar",
            x: gender,
            y: count
        }

        var data = [trace];

        // var layout = {
        //     title: "",

        // }
        Plotly.newPlot("bar", data);
    })
}
// plotGenders();

function plotCause() {
    d3.json("http://localhost:5000/causeDeath").then(function (data) {
        var cause = data.map(d => d.cause);
        var count = data.map(d => d.count);

        var trace = {
            type: "bar",
            x: cause,
            y: count
        }

        var data = [trace];

        // var layout = {
        //     title: "",

        // }
        Plotly.newPlot("bar", data);
    })
}
// plotCause();