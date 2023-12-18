import React from 'react'

export default function Button( props) {
  // console.log(props.onclick)
  return (
    <button
        className='outline-none px-4 py-1 rounded-full
        text-white shadow-lg'
        style={{backgroundColor:props.color}}
        >Red</button>
  )
}
