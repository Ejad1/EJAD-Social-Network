import { useState } from 'react'
import './css/App.css'
import { Navbar } from './composants/Nav'
import { Main } from './composants/Main'
// import { Advertising } from './composants/Advertising'
import { Notifications } from './composants/Notifications'
import imagePublication from './assets/cat.jpg'

function App() {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState(false);

  const publicationText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a dolore veritatis, ";
  const publicationImage = imagePublication;
  // Publications array
  const [userPublications, setUserPublications] = useState([
    {
      id: 1,
      text: publicationText,
      photo: publicationImage,
    },
    {
      id: 2,
      text: publicationText,
      photo: publicationImage,
    },
    {
      id: 3,
      text: publicationText,
      photo: publicationImage,
    },
    {
      id: 4,
      text: publicationText,
      photo: publicationImage,
    },
    {
      id: 5,
      text: publicationText,
      photo: publicationImage,
    },
    {
      id: 6,
      text: publicationText,
      photo: publicationImage,
    },
    {
      id: 7,
      text: publicationText,
      photo: publicationImage,
    }
  ])

  const [publicationArrayLength, setPublicationsArraLength] = useState(userPublications.length);

  // Add new publication
  const handleAddNewPublication = (newPub) => {
    setUserPublications((prevPubs) => [newPub, ...prevPubs]);

    const copy = [...userPublications];
    for (let i = 0; i < userPublications.length; i++) {
      copy[i].id = i + 1;
    }
    setUserPublications(copy);
  }

  // Publication text and/or image modification function
  const handleSetPublication = (id, newText, newImage) => {
    setUserPublications((prevPublications) =>
        prevPublications.map((publication) => {
            if (publication.id === id) {
                return {
                    ...publication,
                    text: newText,
                    photo: newImage
                }
            }
            return publication;
        })
    )
    handleDisplayNotification(!displayNotifications);
  }

  const handleDeletePublication = (id) => {
    setUserPublications((prevPublications) => prevPublications.filter((pub) => pub.id !== id));

    const copy = [...userPublications];
    for (let i = 0; i < userPublications.length; i++) {
      copy[i].id = i + 1;
    }
    setUserPublications(copy);
    setPublicationsArraLength(userPublications.length);
  }

  const handleAddNotifications = (notification) => {
    setNotificationsArray([...notificationsArray, notification])
  }
  
  const handleDisplayNotification = (state) => {
      setDisplayNotifications(state);
  }
  

  return (
    <>
      <Navbar
          handleAddNotifications = { handleAddNotifications }
          handleDisplayNotification = { handleDisplayNotification } 
          state = { displayNotifications }
          addPub = { handleAddNewPublication }
          longueur = { publicationArrayLength }
      ></Navbar>

      { displayNotifications && <Notifications monTableau = { notificationsArray }></Notifications> }

      <Main 
          notifsArray={ handleAddNotifications } 
          handleDisplayNotification = { handleDisplayNotification } 
          state = { displayNotifications }
          pubsArray = { userPublications }
          pubModification = { handleSetPublication }
          pubDelete = { handleDeletePublication }
      ></Main>
      {/* <Advertising></Advertising> */}
    </>
  )
}

export default App
