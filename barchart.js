$(document).ready(function(){

  function drawBarChart(data, options, element){

    let figureContainer = $("<div></div>");
    let graphContainer = $("<div></div>");
    let barContainer = $("<div></div>");

    let bars = [];
    let chartYMax = Math.max(...data)

    //Create a container for each bar
    $.each(data, function(num){
      for(let i = 0; i < data.length; i ++){
        let barObj = {};
        barObj.label = data[i];
        barObj.height = Math.floor(data[i]/chartYMax * 100) + "%";
        barObj.bar = $("<div><span>barObj.label</span></div>").appendTo(barContainer);
        bars.push(barObj);
      }
    })


  }

  data = [1,2,3,4,5]
  drawBarChart(data,null,"#chart");
});


