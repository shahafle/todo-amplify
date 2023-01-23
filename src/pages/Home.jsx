import { Auth } from "aws-amplify"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom/dist"
//JS
import { confirmSignup, login, signup } from "../store/user.action"
import { userService } from "../services/user.service"

export function Home() {

   const navigate = useNavigate()

   const { loggedInUser } = useSelector(state => state.userModule)
   const [user, setUser] = useState(userService.getDefaultUser())
   const [step, setStep] = useState(0)
   const [authError, setAuthError] = useState(0)

   useEffect(() => {
      if (loggedInUser && loggedInUser.userConfirmed !== false) {
         navigate('/todo')
      }
   }, [loggedInUser])

   const handleChange = ({ target }) => {
      const fieldName = target.name
      const value = target.value
      setUser({ ...user, [fieldName]: value })
   }

   const toggleIsLogin = () => {
      setUser(userService.getDefaultUser())
      setStep(step === 0 ? 1 : 0)
   }

   const onLogin = async (ev) => {
      ev.preventDefault()
      try {
         await login(user)
         navigate('/todo')
      } catch (err) {
         setAuthError(err.message)
      }
   }

   const onSignUp = async (ev) => {
      ev.preventDefault()
      try {
         await signup(user)
         setStep(2)
      } catch (err) {
         setAuthError(err.message)
      }

   }

   const onConfirmSignup = async (ev) => {
      ev.preventDefault()
      try {
         await confirmSignup(user)
         navigate('/todo')
      } catch (err) {
         setAuthError(err.message)
      }
   }

   return <main>
      {step === 0 && <form className="login" onSubmit={onLogin}>
         <label>Username
            <input type="text" name="username" value={user.username} onChange={handleChange} />
         </label>
         <label>Password
            <input type="password" name="password" value={user.password} onChange={handleChange} />
         </label>
         {!!authError && <p>{authError}</p>}
         <button>Login</button>
      </form>}

      {step === 1 && <form className="sign-up" onSubmit={onSignUp}>
         <label>Username
            <input type="text" name="username" value={user.username} onChange={handleChange} />
         </label>
         <label>Password
            <input type="password" name="password" value={user.password} onChange={handleChange} />
         </label>
         <label>Email
            <input type="email" name="email" value={user.email} onChange={handleChange} />
         </label>
         <label >Phone
            <input type="phone" name="phone" value={user.phone} onChange={handleChange} />
         </label>
         {!!authError && <p>{authError}</p>}
         <button>Sign Up</button>
      </form>}

      {step === 2 && <form className="confirm-sign-up" onSubmit={onConfirmSignup}>
         <label>Your authentication code
            <input type="text" name="authenticationCode" value={user.authenticationCode} onChange={handleChange} />
         </label>
         {!!authError && <p>{authError}</p>}
         <button>Submit</button>
      </form>}

      <button onClick={toggleIsLogin}>{step ? 'Already have an account?' : 'Don\'t have an account yet?'}</button>

   </main>
}