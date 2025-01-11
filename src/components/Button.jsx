import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-4 py-2 border-2 border-green-500 text-white bg-transparent rounded-md hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white active:bg-green-600 active:text-white transition duration-200'>
            <p>{text}</p>
        </button>
    )
}
