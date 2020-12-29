$(document).ready(function () {
  const data = [1, 2, 3, 8, 5];
  const data2 = [1, 2, 3, 4, 10];

  const options = {
    barColor: "#ffb6c1",
    valColor: "white",
    barSpacing: "10px",
    yScale: [1, 20, 2],
    yLabelColor: "black",
    yAxisColor: "black",
    xLabelColor: "black",
    titleSize: "30px",
    titleColor: "#e75480",
    valPos: "bottom",
    xLabels: ["label1", "label2", "label3", "label4", "label5"],
  };

  const options2 = {
    barColor: "#ADD8E6",
    valColor: "#808080",
    barSpacing: "10px",
    yScale: [1, 20, 2],
    yLabelColor: "#808080",
    yAxisColor: "#808080",
    xLabelColor: "#808080",
    titleSize: "30px",
    titleColor: "#e75480",
    valPos: "bottom",
    xLabels: ["label1", "label2", "label3", "label4", "label5"],
    chartColor: "#808080",
  };

  function nameXLabels(arr) {
    for (let i = 0; i < arr.length; i++) {
      $("#xLabel" + i).html(arr[i]);
    }
  }

  function drawYAxis(min, max, increment) {
    //Draws Y Axis like an ordered list
    for (let i = max; i >= min; i -= increment) {
      i = Math.floor(i);
      $(`<td class="yBar">${i}
      <div class="tick">-</div></td>)`)
        .appendTo("#yAxis")
        .height((increment / (max - min + 1)) * 100 + "%");
    }
  }

  const uniqId = (function () {
    var i = 0;
    return function () {
      return i++;
    };
  })();

  function drawBarChart(data, options, element) {
    //Hide all inputs first
    $("#titleForm").hide();
    $("#yAxisForm").hide();

    //Create initial title and figure containers if there isn't one already
    if ($(".title").length === 0) {
      $(`<div id="title" class="title">CLICK TO CHANGE TITLE</div>
          <form id="titleForm" class="title">
              <input id="titleInput" type="text" placeholder="Title">
          </form>
          <div id="figure" class="figure">
          <div id="yAxisLabel" class="yAxis-label">CLICK TO CHANGE YAXIS</div>
          <form id="yAxisForm" class="yAxis-form">
            <input id="yAxisInput" type="text" placeholder="y-Axis Label">
          </form>
          <div id="yAxis" class="yAxis"></div>
          <div id="chart" class="chart"></div>
          </div>`)
          .appendTo(element);
    }

    //Create a container for each bar series if there isn't already
    if ($(".barContainer").length === 0) {
      for (let i = 0; i < data.length; i++) {
        $(`<div class="barContainer" id="barContainer${i}">
        <div id="xLabel${i}" class="xLabel"></div>
        </div>`)
          .appendTo("#chart")
          .height("100%")
          .width((1 / data.length) * 100 + "%");
      }
    }

    //Adds xAxis labels
    nameXLabels(options["xLabels"]);

    //Adds yAxis based on the latest scale option
    if ($(".yBar").length === 0) {
      drawYAxis(
        options["yScale"][0],
        options["yScale"][1],
        options["yScale"][2]
      );
    }

    let labelIds = [];
    //Add bars to the container
    for (let i = 0; i < data.length; i++) {
      let label = data[i];
      let height = Math.floor((data[i] / options["yScale"][1]) * 100) + "%";
      let id = uniqId();

      $(`<div class=bar id=bar${i}>
      <div id="label${id}" class="label">${label}</div>
      </div>`)
        .appendTo($(`#barContainer${i}`))
        .height(height)
        .width("100%")
        .css("background-color", options["barColor"]);

      //Customize label color
      $(`#label${id}`).css("color", options["valColor"]);
    }

    //Customize CSS based on options
    for (let option in options) {
      if (option === "barSpacing") {
        $(".bar").css("border-left", `${options[option]} solid white`);
        $(".chart").css("padding-right", options[option]);
      } else if (option === "titleSize") {
        $("#title").css("font-size", options[option]);
      } else if (option === "titleColor") {
        $("#title").css("color", options[option]);
      } else if (option === "yLabelColor") {
        $("#yAxisLabel").css("color", options[option]);
      } else if (option === "yAxisColor") {
        $(".yBar").css("color", options[option]);
      } else if (option === "xLabelColor") {
        $(".xLabel").css("color", options[option]);
      } else if (option === "valPos") {
        if (options[option] === "top") {
        } else if (options[option] === "centre") {
          $(".label").css("align-items", "center");
        } else if (options[option] === "bottom") {
          $(".label").css("align-items", "flex-end");
        }
      } else if (option === "chartColor") {
        $(".chart").css("border-color", options[option]);
      }
    }

    //Change titles
    $("#title").on("click", function () {
      $("#titleForm").show();
      $("#title").hide();
    });

    //Ensure title can be submitted on enter
    $("#titleInput").keydown(function (e) {
      if (e.which == 13) {
        $("#titleForm").submit(function (event) {
          event.preventDefault();
          $("#title").html($("#titleInput").val());
        });
        $("#titleForm").hide();
        $("#title").show();
      }
    });

    //Change yAxisLabel
    $("#yAxisLabel").on("click", function () {
      $("#yAxisForm").show();
      $("#yAxisLabel").hide();
    });

    //Ensure title can be submitted on enter
    $("#yAxisInput").keydown(function (e) {
      if (e.which == 13) {
        $("#yAxisForm").submit(function (event) {
          event.preventDefault();
          $("#yAxisLabel").html($("#yAxisInput").val());
        });
        $("#yAxisForm").hide();
        $("#yAxisLabel").show();
      }
    });
  }

  //draws chart with bar containers for 2 different series
  drawBarChart(data, options, "#barChart");
  drawBarChart(data2, options2, "#barChart");
});
