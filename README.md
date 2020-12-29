# bar-chart

### About
Allows a user to generate a bar chart on a webpage using only JS/JQuery, HTML & CSS. This is a Lighthouse Labs stretch project. 

Click the following link to view an example barchart: 
**https://chonie1.github.io/bar-chart/**

### Setup
Save barchart.js and styles.css into your projects folder and ensure they are linked appropriately to your html page 

### Function
In the .js file, the function used is: drawBarChart(data, options, element);
* Data: An array of data. drawBarChart can be called again for as many series required
* Options: An object with the following properties to customize the bar chart: 
 ```javascript
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
  ```
* Element: DOM element or jQuery element that the chart will get rendered into.

### Known issues/bugs
1. NA

### Features to be implemented 
1. Legend for each series
2. Webpage customizable features
3. Other customizable features

### Resources
* https://api.jquery.com/
* https://www.smashingmagazine.com/2011/09/create-an-animated-bar-graph-with-html-css-and-jquery/
