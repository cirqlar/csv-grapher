import React from 'react';
import Chart from 'chart.js';

let color = ["blue", "green", "grey", "orange", "purple", "red", "yellow"];
let colors = {
  blue: "rgb(54, 162, 235)",
  green: "rgb(75, 192, 192)",
  grey: "rgb(201, 203, 207)",
  orange: "rgb(255, 159, 64)",
  purple: "rgb(153, 102, 255)",
  red: "rgb(255, 99, 132)",
  yellow: "rgb(255, 205, 86)",
}



function createChart(ctx, data) {
  let graph = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data['_labels'],
      datasets: data['_keys'].map((key, index) => {
        return {
          label: key,
          backgroundColor: colors[color[index]],
          borderColor: colors[color[index]],
          data: data[key],
          fill: false,
        };
      }),
    },
  });
  return graph  
}

function Graph(props) {
  let canvas = React.useRef();

  React.useEffect(() => {
    createChart(canvas.current.getContext('2d'), props.data);
  })

  return (
    <canvas ref={canvas}></canvas>
  );
}

export default Graph;