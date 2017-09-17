const initiatorReducer = (state = null, action) => {
    if (action.type === "NEWSHIPMENT") {
        return action.payload
    }
    return state
}

export default initiatorReducer
