import React from 'react'

export default function OperationButton({value, dispatch}) {
  return (
    <>
      <button onClick={()=>dispatch({type:'AddOperation', value})} >
      {value}
      </button>
    </>
  )
}
