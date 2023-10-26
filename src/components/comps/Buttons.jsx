import React from 'react'

function Buttons({ name, }) {
    return (
        <div className="relative group">
            <button className="relative h-10  items-center flex rounded-lg p-4 bg-transparent border border-gray-400 hover:text-red-600  hover:border-red-600">
                <span className="text-gray-300 px-2 group-peer font-semibold ">{name}</span>
            </button>
        </div>
    )
}

export default Buttons