$(document).ready(function(){

  function drawBarChart(data, options, element){

    let figureContainer = $("#figure");
    let chartContainer = $("#chart");
    let bars = []; //array for each bar

    const chartYMax = Math.max(...data)*1.05; //Gives 5% margin from top

    //Create a container for each bar
    for(let i = 0; i < data.length; i ++){
      let barObj = {}
      barObj.label = data[i];
      barObj.height = Math.floor(data[i] / chartYMax * 100) + "%";
      barObj.bar = $(`<div class=bar id=bar${i}><span id="label"${data[i]}>${barObj.label}</span></div>`)
        .appendTo("#chart")
        .height(barObj.height)
        .width(1 / data.length * 100 + "%")
      bars.push(barObj);
    }
  }

  function drawYAxis(min,max,increment){


  }

  data = [1,2,3,4,5];
  drawBarChart(data,null,"#chart");

});


