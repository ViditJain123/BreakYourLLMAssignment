import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import jsonData from '../assets/stage5_metric_evaluation.json';

function Accuracy() {
  const value = jsonData.metrics[0].metric_result * 100;

  return (
    <div className='mt-10'>
    <ReactSpeedometer
      // Ensure the bounding box is something reasonable
      width={330}
      height={270}
      maxValue={100}
      minValue={0}
      value={value}
      needleColor="black"
      startColor="red"
      segments={10}
      endColor="green"
      currentValueText={`${value.toFixed(2)}%`}
    />
    </div>
  );
}

export default Accuracy;