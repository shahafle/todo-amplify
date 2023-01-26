export const SET_IS_AUTH_LOADING = 'SET_IS_AUTH_LOADING'
export const SET_LOGGED_USER = 'SET_LOGGED_USER'
export const SET_LOGGED_USER_PRM = 'SET_LOGGED_USER_PRM'

const initialState = {
    loggedInUser: null,
    loggedUserPrm: null,
    isAuthLoading: false
}


export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_USER:
            return { ...state, loggedInUser: action.user, loggedUserPrm: null, isAuthLoading: false }
        case SET_LOGGED_USER_PRM:
            return { ...state, loggedUserPrm: action.loggedUserPrm }
        case SET_IS_AUTH_LOADING:
            return { ...state, isAuthLoading: action.isAuthLoading }
        default:
            return state
    }
}


