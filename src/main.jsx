import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import { Notifications } from './composants/Notifications/Notifications.jsx'
import { SignUpForm } from './composants/Forms/SignUpForm.jsx'
import { SignInForm } from './composants/Forms/SignInForm.jsx'
import MyApp from './composants/MyApp.jsx'
import { Messages } from './composants/Messages/Messages.jsx'
import Stories from './composants/Messages/Stories/Stories.jsx'
import { PasswordForgot } from './composants/Forms/PasswordForgot/PasswordForgot.jsx'
import { PasswordReset } from './composants/Forms/PasswordForgot/ResetPassword.jsx'
import { CodeVerification } from './composants/Forms/PasswordForgot/CodeVerification.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>
  },
  {
    path:'/esn/:userId',
    element: <MyApp></MyApp>
  },
  {
    path:'/messages',
    element: <Messages></Messages>
  },
  {
    path:'/notifications',
    element: <Notifications></Notifications>
  },
  {
    path:'/signup',
    element: <SignUpForm></SignUpForm>
  },
  {
    path:'/signin',
    element: <SignInForm></SignInForm>
  },
  {
    path: '/passwordforgot',
    element: <PasswordForgot></PasswordForgot>
  },
  {
    path: '/resetpassword',
    element: <PasswordReset></PasswordReset>
  },
  {
    path: '/codeverification',
    element: <CodeVerification></CodeVerification>
  },
  {
    path:'/stories',
    element: <Stories></Stories>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </React.StrictMode>,
)
