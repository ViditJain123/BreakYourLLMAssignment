// PreviousResults.jsx
import React, { useState } from 'react'
import assignmentData from '../assets/assignment_data.json'

function PreviousResults() {
  const previousTestRuns = assignmentData.previous_test_runs
  const testResults = assignmentData.test_results // single object in the JSON

  // State to store which run UUID is selected
  const [selectedRunUuid, setSelectedRunUuid] = useState(null)
  // State to store selected main question and paraphrased question
  const [selectedMainQuestion, setSelectedMainQuestion] = useState('')
  const [selectedParaphrasedQuestion, setSelectedParaphrasedQuestion] = useState('')

  // Handle radio button selection
  const handleRadioChange = (uuid) => {
    setSelectedRunUuid(uuid)
    // Reset dropdowns when a new run is selected
    setSelectedMainQuestion('')
    setSelectedParaphrasedQuestion('')
  }

  // Check if the selected run matches the test_results UUID
  const isMatchingTestResults = testResults.uuid === selectedRunUuid

  return (
    <div className="pt-10 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ------------------ Previous Runs Table ------------------ */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* Table Head */}
          <thead className="bg-gray-50 dark:bg-gray-700 border-b border-black dark:border-gray-600">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Select
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                UUID
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Run Date
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Run Time
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Run By
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Run Duration
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Description
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {previousTestRuns.map((run) => (
              <tr key={run.uuid}>
                <td className="px-4 py-2 text-center">
                  <input
                    type="radio"
                    name="selectedRun"
                    className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                    onChange={() => handleRadioChange(run.uuid)}
                    checked={selectedRunUuid === run.uuid}
                  />
                </td>
                <td className="px-4 py-2 text-center">{run.uuid}</td>
                <td className="px-4 py-2 text-center">{run.project_name}</td>
                <td className="px-4 py-2 text-center">{run.run_date}</td>
                <td className="px-4 py-2 text-center">{run.run_time}</td>
                <td className="px-4 py-2 text-center">{run.run_by}</td>
                <td className="px-4 py-2 text-center">{run.run_duration}</td>
                <td className="px-4 py-2 whitespace-normal break-words">
                  {run.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ------------------ Test Results Section ------------------ */}
      {isMatchingTestResults && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow transition-colors duration-300">
          {/* Title with UUID */}
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Test Results: {testResults.uuid}
          </h2>

          {/* Dropdowns in the same line for medium screens and above */}
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            {/* Main Question Dropdown */}
            <div className="flex-1">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Select Main Question
              </label>
              <select
                className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300"
                value={selectedMainQuestion}
                onChange={(e) => setSelectedMainQuestion(e.target.value)}
              >
                <option value="">-- Select Main Question --</option>
                {testResults.main_questions.map((mq, idx) => (
                  <option key={idx} value={mq}>
                    {mq}
                  </option>
                ))}
              </select>
            </div>

            {/* Paraphrased Question Dropdown */}
            <div className="flex-1">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Select Paraphrased Question
              </label>
              <select
                className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300"
                value={selectedParaphrasedQuestion}
                onChange={(e) => setSelectedParaphrasedQuestion(e.target.value)}
              >
                <option value="">-- Select Paraphrased Question --</option>
                {testResults.paraphrased_questions.map((arr, idx) =>
                  arr.map((pq, subIdx) => (
                    <option key={`${idx}-${subIdx}`} value={pq}>
                      {pq}
                    </option>
                  ))
                )}
              </select>
            </div>
          </div>

          {/* Test Cases Table (only shown if both dropdowns are selected) */}
          {selectedMainQuestion && selectedParaphrasedQuestion && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-4">
                <thead className="bg-gray-50 dark:bg-gray-700 border-b border-black dark:border-gray-600">
                  <tr>
                    <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Case
                    </th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Response
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800">
                  {testResults.test_cases.map((outerArr, i1) =>
                    outerArr.map((innerArr, i2) =>
                      innerArr.map((caseObj, i3) => (
                        <tr key={`${i1}-${i2}-${i3}`}>
                          <td className="px-4 py-2 text-center text-gray-700 dark:text-gray-200">
                            {caseObj.case}
                          </td>
                          <td className="px-4 py-2 whitespace-normal break-words text-gray-700 dark:text-gray-200">
                            {caseObj.response}
                          </td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PreviousResults