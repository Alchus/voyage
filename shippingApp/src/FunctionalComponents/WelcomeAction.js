export const WELCOME = "WELCOME"
function welcomeAction(welcomeResult) {
    return {
        type: WELCOME,
        payload: welcomeResult
    }
}

export default function welcomeHelper() {
    return function(dispatch) {
        dispatch(welcomeAction(1))
    }
}
