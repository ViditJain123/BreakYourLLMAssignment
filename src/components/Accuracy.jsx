import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import jsonData from '../assets/stage5_metric_evaluation.json';

function Accuracy() {
  const value = jsonData.metrics[0].metric_result * 100;

  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg flex justify-center items-center">
      <ReactSpeedometer
        maxValue={100}
        minValue={0}
        value={value}
        needleColor="Black"
        startColor="Red"
        segments={10}
        endColor="Green"
        currentValueText={`${value.toFixed(2)}%`}
      />
    </div>
  );
}

export default Accuracy;