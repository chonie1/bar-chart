<!DOCTYPE html>

<html lang="en">
  <head>
    <title>Draw Bar Chart</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="barchart.js"></script>
    <link href="styles.css" rel="stylesheet">
  </head>

  <body>
    <header class="title">
      <div id="title" class="title">CLICK TO CHANGE TITLE</div>
      <form id="titleForm" class="title">
        <input id="titleInput" type="text" placeholder="Title">
      </form>
    </header>
    <div id="figure" class="figure">
        <div id="yAxisLabel" class="yAxis-label">CLICK TO CHANGE YAXIS</div>
        <form id="yAxisForm" class="yAxis-form">
          <input id="yAxisInput" type="text" placeholder="y-Axis Label">
        </form>
        <div id="yAxis" class="yAxis"></div>
        <div id="chart" class="chart"></div>
    </div>
    </div>
  </body>
</html>
