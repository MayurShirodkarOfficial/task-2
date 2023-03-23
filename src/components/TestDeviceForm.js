import React from 'react'

const TestDeviceForm = () => {
    return (
        <div>
            <h1 class="text-2xl">Configure Test Device</h1>
            <input class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Device Mac-Id">
            </input>
            <button class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Submit
            </button>
        </div>
    )
}

export default TestDeviceForm