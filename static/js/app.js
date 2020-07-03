
d3.json("http://localhost:5000/data").then(function (data) {
    var state = data.map(d => d.state);
    var age = data.map(d => d.age);
    var gender = data.map(d => d.gender);
    var race = data.map(d => d.race);
    var mental_illness = data.map(d => d.illness);
    var year = data.map(d => d.year);

    var trace1 = {
        type: "bar",
        x: gender,
        y: data.length
    };

    var data1 = [trace1];

    // var layout = {
    //     title: "",

    // }

    Plotly.newPlot("bar", data1);

})


// function buildPlot() {
//     d3.json("http://localhost:5000/data").then(function (data) {
//         var state = data.map(d => d.state);
//         var age = data.map(d => d.age);
//         var gender = data.map(d => d.gender);
//         var race = data.map(d => d.race);
//         var mental_illness = data.map(d => d.illness);
//         var year = data.map(d => d.year);

//         getData();

        
//     })
// }