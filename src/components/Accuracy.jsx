// Accuracy.jsx
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import jsonData from '../assets/stage5_metric_evaluation.json';

function Accuracy() {
  const value = jsonData.metrics[0].metric_result * 100;

  return (
    // Add dark mode classes for background/text if you want a card-like look
    <div className="mt-10 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <ReactSpeedometer
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