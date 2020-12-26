$(document).ready(function(){

  function drawBarChart(data, options, element){

    let figureContainer = $("#figure")
    let chartContainer = $("#chart")

    let chartYMax = Math.max(...data)

    //Create a container for each bar
    for(let num in data){
      chartContainer.append("<div class=\"bar\">Hello</div>");
    }

  }

  data = [1,2,3,4,5];
  drawBarChart(data,null,"#chart");

});


