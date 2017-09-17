import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'

const locationHelper = locationHelperBuilder({})


export const UserIsAuthenticated = connectedRouterRedirect({
    // The url to redirect user to if they fail
    redirectPath: "/",
    // Determine if the user is authenticated or not
    authenticatedSelector: state => state.welcome !== null,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsAuthenticated'
})

export const UserIsNotAuthenticated = connectedRouterRedirect({
    // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
    redirectPath: (state, ownProps) => "",
    // This prevents us from adding the query parameter when we send the user away from the login page
    allowRedirectBack: false,
    // Determine if the user is authenticated or not
    authenticatedSelector: state => state.welcome !== undefined,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsNotAuthenticated'
})

