$(document).ready(function(){

  //Hide all inputs first
  $("#titleForm").hide();

  const data = [1,2,3,4,5];
  const labelArr = ["label1","label2","label3","label4","label5"];
  const options = {
    barColor: "#ffb6c1",
    labelColor: "white",
    barSpacing: "10px solid white",
    yScale: [1,5,2],
    yLabelColor: "black",
    yAxisColor: "black",
    xLabelColor: "black",
    titleSize: "30px",
    titleColor: "#e75480",
    valPos: "top"
  };

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
    const chartYMax = options["yScale"][1];
    const chartYMin = options["yScale"][0];

    //Draws Y-axis with default min 0 and chartYMax incrementing by 1
    drawYAxis(options["yScale"][0],options["yScale"][1],options["yScale"][2]);

    //Create a container for each bar
    for(let i = 0; i < data.length; i ++){
      let barObj = {}
      barObj.label = data[i];
      barObj.height = Math.floor(data[i] / chartYMax * 100) + "%";
      barObj.bar = $(`<div class=bar id=bar${i}>
      <div id="label"${data[i]} class="label">${barObj.label}</div>
      <div id="xLabel${i}" class="xLabel">/div>
      </div>`)
        .appendTo("#chart")
        .height(barObj.height)
        .width(1 / data.length * 100 + "%")
      bars.push(barObj);
    }

    //Name x-axis
    nameXLabels(labelArr);

    //Customize CSS based on options
    for(let option in options){
      if(option === "barColor"){
        $(".bar").css("background-color",options[option]);
      } else if(option === "labelColor"){
        $(".label").css("color",options[option]);
      } else if(option === "barSpacing"){
        $(".bar").css("border-right",options[option]);
        $(".bar").css("border-left",options[option]);
      } else if(option ==="titleSize"){
        $("#title").css("font-size",options[option]);
      } else if(option ==="titleColor"){
        $("#title").css("color",options[option]);
      } else if(option ==="yLabelColor"){
        $("#yAxisLabel").css("color",options[option]);
      } else if(option ==="yAxisColor"){
        $(".yBar").css("color",options[option]);
      } else if(option === "xLabelColor"){
        $(".xLabel").css("color",options[option]);
      } else if(option === "valPos"){
          if(options[option] === "top"){
          } else if(options[option] === "middle"){
            $(".label").css("bottom","50%");
          } else if(options[option] === "bottom"){
            $(".label").css("bottom","0%");
          }

      }
    }

  }


  drawBarChart(data,options,"#figure");




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


