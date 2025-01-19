import React from 'react'
import './App.css'
import Accuracy from './components/Accuracy'
import MainDetailCard from './components/MainDetailCard'
import TestStatistics from './components/TestStatistics'
import jsonData from './assets/stage5_metric_evaluation.json';
import assignmentData from './assets/assignment_data.json';
import AccuracyGraph from './components/AccuracyGraph';
import QuestionAccuracyGraph from './components/QuestionAccuracyGraph';
import PreviousResults from './components/PreviousResults';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const hallucinationRate = jsonData.metrics[2].metric_result * 100;
  const driftRate = jsonData.metrics[3].metric_result * 100;
  const customData1 = assignmentData.custom_metrics.custom_metric_1;
  const customData2 = assignmentData.custom_metrics.custom_metric_2;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8 transition-colors duration-300">
        {/* Header with Dark Mode toggle (icon-based) */}
        <header className="flex items-center mb-6 relative">
          {/* Centered Heading */}
          <h1 className="flex-grow text-center text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            LLM Test Results
          </h1>
          {/* Icon Button for Dark Mode Toggle */}
          <button
            onClick={handleToggleDarkMode}
            className="ml-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
          >
            {/* If dark mode is active, show Sun icon (to switch back to Light),
                otherwise show Moon icon (to switch to Dark). */}
            {darkMode ? (
              // Updated Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2m5.656-16.657l-1.414 1.414
                     M4.686 4.686l1.414 1.414
                     M20 12h2M2 12H4m13.657 7.071l1.414-1.414
                     M6.343 18.364l-1.414-1.414
                     M16 12A4 4 0 118 12a4 4 0 018 0z"
                />
              </svg>
            ) : (
              // Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3
                     a7 7 0 1010.59 9.79z"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Grid Section */}
        <div className="grid grid-cols-3 gap-4 mb-4 items-stretch">
          {/* LEFT COLUMN */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center justify-center">
            <TestStatistics />
          </div>
          
          {/* MIDDLE COLUMN */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center justify-center">
            <Accuracy />
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <MainDetailCard
                heading="Hallucination Rate"
                value={hallucinationRate}
                high={1}
              />
              <MainDetailCard
                heading="LLM Drift rate"
                value={driftRate}
                high={1}
              />
              <MainDetailCard
                heading="Custom Metric 1"
                value={customData1}
                high={1}
              />
              <MainDetailCard
                heading="Custom Metric 2"
                value={customData2}
                high={1}
              />
            </div>
          </div>
        </div>

        {/* Graphs */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <AccuracyGraph />
          </div>
          <div className="w-1/2">
            <QuestionAccuracyGraph />
          </div>
        </div>

        <PreviousResults />
      </div>
    </div>
  )
}

export default App