$(document).ready(function(){

  function drawXLabels(arr){
    //accepts array of labels
  }

  function drawYAxis(min,max,increment){
    //Draws Y Axis like an ordered list
    for(let i = max; i >= min; i -= increment){
      i = Math.round(i)
      $(`<td class="yBar">${i}</td>)`)
        .appendTo("#yAxis")
        .height(increment / (max - min) * 100 + "%");
    }
  }
  function drawBarChart(data, options, element){

    let figureContainer = $("#figure");
    let chartContainer = $("#chart");
    let bars = []; //array for each bar
    const chartYMax = Math.max(...data)*1.05; //Gives 5% margin from top
    const chartYMin = Math.min(...data);

    //Draws Y-axis with default min 0 and chartYMax incrementing by 1
    drawYAxis(0,chartYMax/ 1.05,1);

    //Create a container for each bar
    for(let i = 0; i < data.length; i ++){
      let barObj = {}
      barObj.label = data[i];
      barObj.height = Math.floor(data[i] / chartYMax * 100) + "%";
      barObj.bar = $(`<div class=bar id=bar${i}>
      <div id="label"${data[i]} class="label">${barObj.label}</div>
      <div id="xLabel"${i} class="xLabel">Hello</div>
      </div>`)
        .appendTo("#chart")
        .height(barObj.height)
        .width(1 / data.length * 100 + "%")
      bars.push(barObj);
    }
  }



  data = [1,2,3,4,5];
  drawBarChart(data,null,"#chart");

});


