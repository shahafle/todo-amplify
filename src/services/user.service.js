import { Auth } from "aws-amplify"

export const userService = {
   signup,
   confirmSignup,
   login,
   logout,
   getLoggedInUser,
   getDefaultUser
}

async function signup(credentials) {
   const { username, password, email, phone } = credentials
   const signUpData = await Auth.signUp({
      username, password, attributes: { email, phone_number: phone },
      autoSignIn: {
         enabled: true,
      }
   })
   const { userConfirmed } = signUpData
   return { username, password, attributes: { email, phone_number: phone }, userConfirmed }
}

async function confirmSignup(credentials) {
   const { username, authenticationCode } = credentials
   return await Auth.confirmSignUp(username, authenticationCode)
}

async function login(credentials) {
   const { username, password } = credentials
   const cognitoUser = await Auth.signIn(username, password);
   const loggedInUser = _formatCognitoUser(cognitoUser)
   return loggedInUser
}

async function logout() {
   return await Auth.signOut();
}

async function getLoggedInUser() {
   const cognitoUser = await Auth.currentAuthenticatedUser()
   const user = _formatCognitoUser(cognitoUser)
   return user
}

function getDefaultUser() {
   return {
      username: '',
      password: '',
      email: '',
      phone: '',
      authenticationCode: ''
   }
}

function _formatCognitoUser(cognitoUser) {
   const { username, attributes: { email, phone_number } } = cognitoUser
   return { username, attributes: { email, phone_number } }
}