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
  const hallucinationRate = jsonData.metrics[2].metric_result * 100;
  const driftRate = jsonData.metrics[3].metric_result * 100;
  const customData1 = assignmentData.custom_metrics.custom_metric_1;
  const customData2 = assignmentData.custom_metrics.custom_metric_2;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        LLM Test Results
      </h1>
      
      {/* 
        Use grid with 3 columns and 'items-stretch' so all columns 
        match in height, and wrap each column in the same Tailwind 
        card styling. 
      */}
      <div className="grid grid-cols-3 gap-4 mb-4 items-stretch">
        {/* LEFT COLUMN */}
        <div className="bg-white p-4 rounded shadow flex items-center justify-center">
          <TestStatistics />
        </div>
        
        {/* MIDDLE COLUMN */}
        <div className="bg-white p-4 rounded shadow flex items-center justify-center">
          <Accuracy />
        </div>
        
        {/* RIGHT COLUMN */}
        <div className="bg-white p-4 rounded shadow flex items-center justify-center">
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
  )
}

export default App;