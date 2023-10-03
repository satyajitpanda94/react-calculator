import React, { useReducer } from 'react'
import './App.css'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import { reducer } from './reducer'
import { formatNumber } from './formatNumber'


export default function App() {
  const [{ firstInput, operation, secondInput, evaluated }, dispatch] = useReducer(reducer, {})

  return (
    <div className='calculator'>
      <div className="output">
        <div className="first-input">{formatNumber(firstInput)} {operation}</div>
        <div className="second-input"> {evaluated ? '=' : ''} {formatNumber(secondInput)}</div>
      </div>
      <button onClick={() => { dispatch({ type: 'Clear' }) }}>AC</button>
      <button onClick={() => { dispatch({ type: 'Delete' }) }}>DEL</button>
      <OperationButton value={'%'} dispatch={dispatch} />
      <OperationButton value={'÷'} dispatch={dispatch} />
      <DigitButton value={'7'} dispatch={dispatch} />
      <DigitButton value={'8'} dispatch={dispatch} />
      <DigitButton value={'9'} dispatch={dispatch} />
      <OperationButton value={'×'} dispatch={dispatch} />
      <DigitButton value={'4'} dispatch={dispatch} />
      <DigitButton value={'5'} dispatch={dispatch} />
      <DigitButton value={'6'} dispatch={dispatch} />
      <OperationButton value={'-'} dispatch={dispatch} />
      <DigitButton value={'1'} dispatch={dispatch} />
      <DigitButton value={'2'} dispatch={dispatch} />
      <DigitButton value={'3'} dispatch={dispatch} />
      <OperationButton value={'+'} dispatch={dispatch} />
      <DigitButton value={'.'} dispatch={dispatch} />
      <DigitButton value={'0'} dispatch={dispatch} />
      <button className='span-two' onClick={() => dispatch({ type: 'Evaluate' })}>=</button>
    </div>
  )
}
