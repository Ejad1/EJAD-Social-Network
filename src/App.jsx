import './css/App.css'
import { Navbar } from './composants/Nav'
import { Main } from './composants/Main'
import { Messages } from './composants/Messages'
import { Advertising } from './composants/Advertising'
import { Notifications } from './composants/Notifications'
import { useState } from 'react'

function App() {
  const [notificationsArray, setNotificationsArray] = useState([]);

  const handleAddNotifications = (notification) => {
    setNotificationsArray([...notificationsArray, notification])
  }

  return (
    <>
      <Navbar></Navbar>
      <Notifications monTableau = { notificationsArray }></Notifications>
      <Messages></Messages>
      <Main array={ handleAddNotifications }></Main>
      <Advertising></Advertising>
    </>
  )
}

export default App
