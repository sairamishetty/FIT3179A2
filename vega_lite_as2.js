var vg_1 = "linechart.json";
var vg_2 = "cholorpeth.json"; 
var vg_3 = "stackedbar.json";
var vg_4 = "treemap.json"
var vg_5 = "piechart.json"

// Embed the line chart
vegaEmbed("#linechart", vg_1).then(function(result) {
    console.log("Line chart rendered successfully.");
}).catch(console.error);

// Embed the choropleth chart
vegaEmbed("#choropleth", vg_2).then(function(result) {
    console.log("Choropleth chart rendered successfully.");
}).catch(console.error);

vegaEmbed("#stackedbar", vg_3).then(function(result) {
    console.log("Stacked bar chart rendered successfully.");
}).catch(console.error);

vegaEmbed("#treemap", vg_4).then(function(result) {
    console.log("Treemap rendered successfully.");
}).catch(console.error);

vegaEmbed("#piechart", vg_5).then(function(result) {
    console.log("Pie chart rendered successfully.");
}).catch(console.error);
