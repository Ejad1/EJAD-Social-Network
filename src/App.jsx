import './css/App.css'
import { Navbar } from './composants/Nav'
import { Main } from './composants/Main'
// import { Advertising } from './composants/Advertising'
import { Notifications } from './composants/Notifications'
import { useEffect, useState } from 'react'

function App() {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState(false);

  const handleAddNotifications = (notification) => {
    setNotificationsArray([...notificationsArray, notification])
  }

  useEffect(() => {
    if (notificationsArray.length !== 0) {
      setDisplayNotifications(true);
    }
  }, [notificationsArray]);
  

  return (
    <>
      <Navbar></Navbar>
      { displayNotifications && <Notifications monTableau = { notificationsArray }></Notifications> }
      <Main array={ handleAddNotifications }></Main>
      {/* <Advertising></Advertising> */}
    </>
  )
}

export default App
