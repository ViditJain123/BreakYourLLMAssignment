// MainDetailCard.jsx
import React from 'react'

// Helper function to return Tailwind text color classes
function getColorClass(value, high) {
  const numericValue = Number(value)

  // If high === 0 => higher value is better
  if (high === 0) {
    if (numericValue < 30) return 'text-red-600'
    if (numericValue < 70) return 'text-yellow-500'
    return 'text-green-600'
  } else {
    // If high !== 0 => lower value is better
    if (numericValue < 30) return 'text-green-600'
    if (numericValue < 70) return 'text-yellow-500'
    return 'text-red-600'
  }
}

function MainDetailCard({ heading, value, high }) {
  const colorClass = getColorClass(value, high)

  return (
    <div className="max-w-xs p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex flex-col items-center text-center bg-white dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {heading}
      </p>
      <h2 className={`mt-2 text-2xl font-semibold ${colorClass}`}>
        {value}%
      </h2>
    </div>
  )
}

export default MainDetailCard