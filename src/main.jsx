import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import { SignUpForm } from './composants/Forms/SignUpForm.jsx'
import { SignInForm } from './composants/Forms/SignInForm.jsx'
import MyApp from './composants/MyApp.jsx'
import { Messages } from './composants/Messages/Messages.jsx'
import Stories from './composants/Messages/Stories/Stories.jsx'
import { PasswordForgot } from './composants/Forms/PasswordForgot/PasswordForgot.jsx'
import { PasswordReset } from './composants/Forms/PasswordForgot/ResetPassword.jsx'
import { CodeVerification } from './composants/Forms/PasswordForgot/CodeVerification.jsx'
import { UserInformations } from './composants/User/Informations.jsx'
import { UserProvider } from './composants/Contexts/UserDataContext.jsx'
import { PublicationProvider } from './composants/Contexts/PublicationsContext.jsx'
import { Authentification } from './composants/User/Authentification.jsx'
import { Modification } from './composants/User/Modifications.jsx'
import { DiscussionsList } from './composants/Messages/Discussions/DiscussionsList.jsx'

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
    path:'/esn/messages/:userId',
    element: <Messages></Messages>
  },
  {
    path:'/esn/messages/discussionslist/:userId',
    element: <DiscussionsList></DiscussionsList>
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
    path: '/esn/profil/:userId',
    element: <UserInformations></UserInformations>
  },
  {
    path: '/esn/authentification/:userId',
    element: <Authentification></Authentification>
  },
  {
    path: '/esn/user/modification/:userId',
    element: <Modification></Modification>
  },
  {
    path:'esn//stories',
    element: <Stories></Stories>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <PublicationProvider>
        <RouterProvider router={ router }></RouterProvider>
      </PublicationProvider>
    </UserProvider>
  </React.StrictMode>,
)
