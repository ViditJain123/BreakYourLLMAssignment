// TestStatistics.jsx
import React from 'react';
import jsonData from '../assets/stage5_metric_evaluation.json';

function TestStatistics() {
  const data = jsonData.metrics[1].metric_result;

  return (
    <div className="max-w-md w-full rounded-lg p-6 bg-white dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Test Statistics
      </h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-300 font-medium">Total Tests</span>
          <span className="text-gray-800 dark:text-gray-100 font-semibold">{data.total_cases}</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-300 font-medium">Test Cases</span>
          <span className="text-gray-800 dark:text-gray-100 font-semibold">{data.test_cases}</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-300 font-medium">Paraphrased</span>
          <span className="text-gray-800 dark:text-gray-100 font-semibold">{data.paraphrased_questions}</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700">
          <span className="text-gray-600 dark:text-gray-300 font-medium">Iterations</span>
          <span className="text-gray-800 dark:text-gray-100 font-semibold">{data.iterations}</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700">
          <span className="text-green-600 font-medium">Passed</span>
          <span className="text-green-800 dark:text-green-400 font-semibold">
            {data.total_cases - data.issues_found}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-medium">Failed</span>
          <span className="text-red-800 dark:text-red-400 font-semibold">{data.issues_found}</span>
        </div>
      </div>
    </div>
  );
}

export default TestStatistics;