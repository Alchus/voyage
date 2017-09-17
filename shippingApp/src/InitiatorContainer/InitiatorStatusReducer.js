const initiatorStatusReducer = (state = null, action) => {
    if (action.type === "INITSTATUS") {
        return action.payload
    }
    return state
}

export default initiatorStatusReducer
