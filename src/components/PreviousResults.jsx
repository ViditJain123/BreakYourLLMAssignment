import React from 'react'
import assignmentData from '../assets/assignment_data.json'

function PreviousResults() {
    const previousTestRuns = assignmentData.previous_test_runs
    return (
        <div className="overflow-x-auto pt-10">
            <table className="min-w-full divide-y divide-gray-200">
                {/* Table Head */}
                <thead className="bg-gray-50 border-b border-black">
                    <tr>
                        {/* 1. Radio Button column */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Select
                        </th>
                        {/* 2. UUID */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            UUID
                        </th>
                        {/* 3. Project Name */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Project Name
                        </th>
                        {/* 4. Run Date */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Run Date
                        </th>
                        {/* 5. Run Time */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Run Time
                        </th>
                        {/* 6. Run By */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Run By
                        </th>
                        {/* 7. Run Duration */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Run Duration
                        </th>
                        {/* Description */}
                        <th
                            scope="col"
                            className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Description
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-white divide-y divide-gray-200">
                    {previousTestRuns.map((run) => (
                        <tr key={run.uuid}>
                            {/* Radio Button */}
                            <td className="px-4 py-2 text-center">
                                <input
                                    type="radio"
                                    name="selectedRun"
                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                            </td>
                            {/* UUID */}
                            <td className="px-4 py-2 text-center">
                                {run.uuid}
                            </td>
                            {/* Project Name */}
                            <td className="px-4 py-2 text-center">
                                {run.project_name}
                            </td>
                            {/* Run Date */}
                            <td className="px-4 py-2 text-center">
                                {run.run_date}
                            </td>
                            {/* Run Time */}
                            <td className="px-4 py-2 text-center">
                                {run.run_time}
                            </td>
                            {/* Run By */}
                            <td className="px-4 py-2 text-center">
                                {run.run_by}
                            </td>
                            {/* Run Duration */}
                            <td className="px-4 py-2 text-center">
                                {run.run_duration}
                            </td>
                            {/* Description (wraps text) */}
                            <td className="px-4 py-2 whitespace-normal break-words">
                                {run.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PreviousResults