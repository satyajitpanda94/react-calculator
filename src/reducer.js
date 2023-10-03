
const executeOperation = (firstInput, operation, secondInput) => {
    firstInput = parseFloat(firstInput)
    secondInput = parseFloat(secondInput)

    switch (operation) {
        case '+':
            return (firstInput + secondInput).toString();
        case '-':
            return (firstInput - secondInput).toString();
        case '÷': {
            let division = firstInput / secondInput
            let decimal=Math.floor(division)!==division && division.toString().split('.')[1];

            division = decimal!==null && decimal.length > 8 ? division.toFixed(8) : division

            return division.toString();
        }
        case '×':
            return (firstInput * secondInput).toString();
        case '%':
            return (firstInput / 100 * secondInput).toString();
        default:
            throw new Error('not a valid operation')
    }

}

const addOperation = ({ firstInput, operation, secondInput }, value) => {
    if (!secondInput && !firstInput)
        return {}

    if (!secondInput && firstInput)
        return {
            firstInput,
            operation: value,
            secondInput: ''
        }

    if (secondInput && firstInput) {
        return {
            firstInput: executeOperation(firstInput, operation, secondInput),
            operation: value,
            secondInput: ''
        }
    }

    return {
        firstInput: secondInput,
        operation: value,
        secondInput: ''
    }
}

const addDigit = (secondInput, value, evaluated) => {
    if (evaluated)
        return value === '.' ? '0.' : value
    if (secondInput === '0' && value === '0')
        return '0';
    if (!secondInput && value === '.')
        return '0.'
    if (value === '.' && secondInput.includes('.'))
        return secondInput
    return `${secondInput || ''}${value}`;
}


export const reducer = (state, action) => {
    let { firstInput, operation, secondInput, evaluated } = state
    let { type, value } = action

    switch (type) {
        case 'AddDigit':
            return {
                ...state,
                secondInput: addDigit(secondInput, value, evaluated),
                evaluated: false
            }

        case 'AddOperation':
            return addOperation(state, value)

        case 'Clear':
            return {}

        case 'Delete':
            return {
                ...state,
                secondInput: `${secondInput ? secondInput.slice(0, secondInput.length - 1) : ''}`,
            }

        case 'Evaluate': {
            if (!firstInput && !secondInput)
                return {}
            if (firstInput && !secondInput)
                return {
                    secondInput: firstInput,
                    evaluated: true
                }
            if (secondInput && !firstInput)
                return {
                    secondInput,
                    evaluated: true
                }

            return {
                secondInput: executeOperation(firstInput, operation, secondInput),
                evaluated: true
            }
        }

        default:
            throw new Error('Not a valid input')
    }
}
