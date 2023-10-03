import React from 'react'

export default function DigitButton({value, dispatch}) {
  return (
    <>
      <button onClick={()=>dispatch({type:'AddDigit', value})}>
        {value}
      </button>
    </>
  )
}
