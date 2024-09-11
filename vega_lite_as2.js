var vg_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Time series graph representing net energy supply over time",
    "width": 600,
    "height": 400,
    "data": {
      "url": "data.csv"
    },
    "mark": "line",
    "encoding": {
      "x": {
        "field": "Date",
        "type": "temporal",
        "timeUnit": "yearmonth",
        "axis": {"format": "%b %Y", "title": "Date"}
      },
      "y": {
        "field": "Net energy supply/use - total",
        "type": "quantitative",
        "title": "Net Energy Supply (PJ)"
      }
    },
    "title": "Net Energy Supply in Australia Over Time"
  };
  
  vegaEmbed("#bar_chart", vg_1).then(function(result) {
    console.log("Chart rendered successfully.");
  }).catch(console.error);