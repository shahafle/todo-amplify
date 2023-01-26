import { userService } from '../services/user.service.js'
import { store } from '../store'
import { SET_IS_AUTH_LOADING, SET_LOGGED_USER, SET_LOGGED_USER_PRM } from '../store/user.reducer.js'

export function loadLoggedInUser() {

    const userPrm = userService.getLoggedInUser()
        .then(user => {
            store.dispatch({ type: SET_LOGGED_USER, user })
            return user
        })
        .catch(err => {
            console.log('no logged in user', err)
        })

    store.dispatch({ type: SET_LOGGED_USER_PRM, loggedUserPrm: userPrm })
}

export async function login(credentials) {
    try {
        store.dispatch({ type: SET_IS_AUTH_LOADING, isAuthLoading: true })
        const user = await userService.login(credentials)
        store.dispatch({ type: SET_LOGGED_USER, user })
    } catch (err) {
        console.log('failed to login', err);
        store.dispatch({ type: SET_IS_AUTH_LOADING, isAuthLoading: false })
    }
}

export async function signup(credentials) {
    try {
        const user = await userService.signup(credentials)
        store.dispatch({ type: SET_LOGGED_USER, user })
        return user
    } catch (err) {
        console.log('failed to signup', err);
        store.dispatch({ type: SET_IS_AUTH_LOADING, isAuthLoading: false })
    }
}

export async function confirmSignup(credentials) {
    try {
        store.dispatch({ type: SET_IS_AUTH_LOADING, isAuthLoading: true })
        await userService.confirmSignup(credentials)
        const user = store.getState().userModule.loggedInUser
        store.dispatch({ type: SET_LOGGED_USER, user })
        return user
    } catch (err) {
        console.log('failed to confirm signup', err);
        store.dispatch({ type: SET_IS_AUTH_LOADING, isAuthLoading: false })
    }
}

export async function logout() {
    try {
        store.dispatch({ type: SET_IS_AUTH_LOADING, isAuthLoading: true })
        await userService.logout()
        store.dispatch({ type: SET_LOGGED_USER, user: null })
    } catch (err) {
        console.log('failed to logout', err);
        store.dispatch({ type: SET_IS_AUTH_LOADING, isAuthLoading: false })
    }
}