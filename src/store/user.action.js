import { userService } from '../services/user.service.js'
import { store } from '../store'
import { SET_LOGGED_USER } from '../store/user.reducer.js'

export async function loadLoggedInUser() {
    try {
        const user = await userService.getLoggedInUser()
        store.dispatch({ type: SET_LOGGED_USER, user })
    } catch (err) {
        console.log('no logged in user', err)
    }
}

export async function login(credentials) {
    const user = await userService.login(credentials)
    store.dispatch({ type: SET_LOGGED_USER, user })
}

export async function signup(credentials) {
    const user = await userService.signup(credentials)
    store.dispatch({ type: SET_LOGGED_USER, user })
    return user
}

export async function confirmSignup(credentials) {
    await userService.confirmSignup(credentials)
    const user = store.getState().userModule.loggedInUser
    user.isConfirmed = true
    store.dispatch({ type: SET_LOGGED_USER, user })
    return user
}

export async function logout() {
    await userService.logout()
    store.dispatch({ type: SET_LOGGED_USER, user: null })
}