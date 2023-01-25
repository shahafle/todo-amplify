import { userService } from '../services/user.service.js'
import { store } from '../store'
import { SET_LOGGED_USER, SET_LOGGED_USER_PRM } from '../store/user.reducer.js'

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