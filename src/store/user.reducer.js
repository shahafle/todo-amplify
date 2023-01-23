export const SET_LOGGED_USER = 'SET_LOGGED_USER'

const initialState = {
    loggedInUser: null
}


export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_USER:
            return { ...state, loggedInUser: action.user }
        default:
            return state
    }
}


