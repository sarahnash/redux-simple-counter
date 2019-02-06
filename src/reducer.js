const initialState = {
    value: 0,
    color: 'red'
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color
        }
    } else if (type === "DECREMENT") {
        return {
            value: state.value - 1,
            color: state.color
        }
    } else if (type === "ADD") {
        return {
            value: state.value + action.value,
            color: state.color
        }
    } else if (type === "COLOROPTION") {
        return {
            value: state.value,
            color: state.color = colorOption.value
        }
    } else if (type === "USERINPUT") {
        return {
            value: parseInt(userInput.value),
            color: state.color
        }
    } else if (type === "ADDCOUNTER") {
        return {
            value: state.value,
            color: state.color
        }
    }
    return state
}
