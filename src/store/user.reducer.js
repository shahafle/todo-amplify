export const SET_LOGGED_USER = 'SET_LOGGED_USER'
export const SET_LOGGED_USER_PRM = 'SET_LOGGED_USER_PRM'

const initialState = {
    loggedInUser: null,
    loggedUserPrm: null
}


export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_USER:
            return { ...state, loggedInUser: action.user, loggedUserPrm: null }
        case SET_LOGGED_USER_PRM:
            return { ...state, loggedUserPrm: action.loggedUserPrm }
        default:
            return state
    }
}


