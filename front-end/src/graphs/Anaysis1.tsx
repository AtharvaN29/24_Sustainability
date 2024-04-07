import CanvasJSReact from '@canvasjs/react-charts'
import { useEffect, useState } from 'react'
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart
export default function Anaysis1() {
  const [data, setData] = useState([{}])
  useEffect(() => {}, [data])
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light1', // "light1", "dark1", "dark2"
    title: {
      text: 'Stability Graph ',
    },
    axisY: {
      title: 'Stability Rate',
      suffix: '%',
    },
    axisX: {
      title: 'Hours',
      prefix: 'H',
      interval: 2,
    },
    data: [
      {
        type: 'line',
        toolTipContent: 'Hour {x}: {y}%',
        dataPoints: [
          { x: 1, y: 69 },
          { x: 2, y: 16 },
          { x: 3, y: 38 },
          { x: 4, y: 79 },
          { x: 5, y: 32 },
          { x: 6, y: 36 },
          { x: 7, y: 24 },
          { x: 8, y: 42 },
          { x: 9, y: 71 },
          { x: 10, y: 5 },
          { x: 11, y: 29 },
          { x: 12, y: 80 },
          { x: 13, y: 57 },
          { x: 14, y: 84 },
          { x: 15, y: 39 },
          { x: 16, y: 55 },
          { x: 17, y: 50 },
          { x: 18, y: 15 },
          { x: 19, y: 58 },
          { x: 20, y: 54 },
          { x: 21, y: 59 },
          { x: 22, y: 64 },
          { x: 23, y: 45 },
        ],
      },
    ],
  }
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  )
}
