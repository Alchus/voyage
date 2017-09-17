const welcomeReducer = (state = null, action) => {
    if (action.type === "WELCOME") {
        return action.payload
    }
    return state
}

export default welcomeReducer