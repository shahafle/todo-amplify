import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom/dist"
//JS
import { confirmSignup, login, signup } from "../store/user.action"
import { userService } from "../services/user.service"
//ASSETS
import icon from '../assets/imgs/icon.svg';
import { IoAlertCircleOutline } from "react-icons/io5";

export function Home() {

   const navigate = useNavigate()

   const [user, setUser] = useState(userService.getDefaultUser())
   const [step, setStep] = useState(0)
   const [authError, setAuthError] = useState('')

   useEffect(() => {
      setAuthError('')
   }, [step])

   const handleChange = ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value })
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

   return <main className="home main-layout">
      <section className="content">

         <header>
            <img src={icon} alt="Do it logo" />
            <h2>Sign {step === 0 ? 'in' : 'up'} to Do it</h2>
         </header>

         {step === 0 && <form className="login" onSubmit={onLogin}>
            <label>Username
               <input type="text" name="username" value={user.username} onChange={handleChange} />
            </label>
            <label>Password
               <input type="password" name="password" value={user.password} onChange={handleChange} />
            </label>
            {!!authError && <p><IoAlertCircleOutline />{authError}</p>}
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
               <input type="email" name="email" value={user.email} onChange={handleChange} required />
            </label>
            <label >Phone
               <input type="phone" name="phone" value={user.phone} onChange={handleChange} />
            </label>
            {!!authError && <div className="auth-error"><IoAlertCircleOutline /><p>{authError}</p></div>}
            <button>Sign Up</button>
         </form>}

         {step === 2 && <form className="confirm-sign-up" onSubmit={onConfirmSignup}>
            <label>Insert here the authentication code sent to your mail
               <input type="text" name="authenticationCode" value={user.authenticationCode} onChange={handleChange} />
            </label>
            {!!authError && <p><IoAlertCircleOutline />{authError}</p>}
            <button>Submit</button>
         </form>}

         <footer>
            {step ? 'Already have an account?' : 'New to Do it?'} <button onClick={toggleIsLogin}>{step ? 'Sign in' : 'Create an account'}</button>
         </footer>

      </section>
   </main>
}