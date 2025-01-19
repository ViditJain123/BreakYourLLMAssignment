// QuestionAccuracyGraph.jsx
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

function CustomizedAxisTick({ x, y, stroke, payload }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
}

function QuestionAccuracyGraph() {
  const data = assignmentData.question_wise_accuracy;

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="question_number" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="cd0810cc" stroke="#ff0000" label={<CustomizedLabel />} />
          <Line dataKey="cd0810cc1" stroke="#800080" label={<CustomizedLabel />} />
          <Line dataKey="cd0810cc2" stroke="#82ca9d" label={<CustomizedLabel />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default QuestionAccuracyGraph;