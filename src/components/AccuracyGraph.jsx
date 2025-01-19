// AccuracyGraph.jsx
import React from 'react';
import assignmentData from '../assets/assignment_data.json';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function CustomizedLabel({ x, y, stroke, value }) {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
}

function CustomizedAxisTick({ x, y, payload }) {
  return (
    <text
      x={x}
      y={y + 15}
      textAnchor="middle"
      fill="#666"
      fontSize={12}
    >
      {payload.value}
    </text>
  );
}

function AccuracyGraph() {
  const fileAccuracyData = assignmentData.file_accuracy_comparison.files;

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-100 p-4 rounded shadow w-full transition-colors duration-300">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={fileAccuracyData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} interval={0} />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line
            dataKey="accuracy"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
            label={<CustomizedLabel />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AccuracyGraph;