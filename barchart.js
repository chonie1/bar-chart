$(document).ready(function(){

  //Hide all inputs first
  $("#titleForm").hide();

  function nameXLabels(arr){
    for (let i = 0; i < arr.length; i ++) {
      $("#xLabel"+i).html(arr[i]);
    }
  }

  function drawYAxis(min,max,increment){
    //Draws Y Axis like an ordered list
    for(let i = max; i >= min; i -= increment){
      i = Math.floor(i)
      $(`<td class="yBar">${i}
      <div class="tick">-</div></td>)`)
        .appendTo("#yAxis")
        .height(increment / (max - min + 1) * 100 + "%");
    }
  }
  function drawBarChart(data, options, element){

    let figureContainer = $("#figure");
    let chartContainer = $("#chart");
    let bars = []; //array for each bar
    const chartYMax = Math.max(...data); //Gives 5% margin from top
    const chartYMin = Math.min(...data);

    //Draws Y-axis with default min 0 and chartYMax incrementing by 1
    drawYAxis(chartYMin,chartYMax,1);

    //Create a container for each bar
    for(let i = 0; i < data.length; i ++){
      let barObj = {}
      barObj.label = data[i];
      barObj.height = Math.floor(data[i] / chartYMax * 100) + "%";
      barObj.bar = $(`<div class=bar id=bar${i}>
      <div id="label"${data[i]} class="label">${barObj.label}</div>
      <div id="xLabel${i}" class="xLabel">Hello</div>
      </div>`)
        .appendTo("#chart")
        .height(barObj.height)
        .width(1 / data.length * 100 + "%")
      bars.push(barObj);
    }
  }

  const data = [1,2,3,4,5];
  const labelArr = ["label1","label2","label3","label4","label5"];

  drawBarChart(data,null,"#chart");
  nameXLabels(labelArr);



  //Change titles
  $("#title").on("click", function() {
    $("#titleForm").show();
    $("#title").hide();
  })

  //Ensure title can be submitted on enter
  $("#titleInput").keydown(function(e) {
    if (e.which == 13) {
        $("#titleForm").submit(function(event){
            event.preventDefault();
            $("#title").html($("#titleInput").val());
          })
        $("#titleForm").hide();
        $("#title").show();
      }
    });
});


