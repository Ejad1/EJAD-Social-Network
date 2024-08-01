import { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar/Nav'
import { Main } from './Main'
import { UserContext } from './Contexts/UserDataContext'
// import { Advertising } from './composants/Advertising'
import { Notifications } from './Notifications/Notifications'
import imagePublication from '../assets/cat.jpg'
import dogImage from '../assets/dog.jpg'
import socialImage from '../assets/social.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { PublicationsContext } from './Contexts/PublicationsContext'


function MyApp() {
  // Recuparation of the user infos
  const infos = useParams();
  const { userData, setUserData } = useContext(UserContext);
  const { setPublications } = useContext(PublicationsContext);

  useEffect(() => {
    const fetchData = async () => {
      // Getting all the publications
      try {
        await axios.get("http://localhost:3000/api/publications/get")
          .then(response => {
            setPublications(response.data);
          })
          .catch(error => console.log("Une erreur s'est produite:", error));
      } catch (error) {
        console.log("Erreur lors de la récupération des publications : ", error);
      }

      // Getting the user informations
      try {
        await axios.get(`http://localhost:3000/api/user/${infos.userId}`)    
            .then(response => {
              const data = response.data;
              setUserData(data);
            })
            .catch(error => {
              console.error('Une erreur s\'est produite:', error);
            });
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      }
    };

    fetchData();
  }, [infos, userData, setUserData, setPublications]);


  const [notificationsArray, setNotificationsArray] = useState([]);
  const [displayNotifications, setDisplayNotifications] = useState(false);

  const publicationText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a dolore veritatis, ";
  const publicationImage = [imagePublication, dogImage, socialImage];
  // Publications array
  const [userPublications, setUserPublications] = useState([
    {
      id: 1,
      text: publicationText,
      photo: publicationImage[ Math.floor(Math.random() * 2) ],
    },
    {
      id: 2,
      text: publicationText,
      photo: publicationImage[ Math.floor(Math.random() * 2) ],
    },
    {
      id: 3,
      text: publicationText,
      photo: publicationImage[ Math.floor(Math.random() * 2) ],
    },
    {
      id: 4,
      text: publicationText,
      photo: publicationImage[ Math.floor(Math.random() * 2) ],
    },
    {
      id: 5,
      text: publicationText,
      photo: publicationImage[ Math.floor(Math.random() * 2) ],
    },
    {
      id: 6,
      text: publicationText,
      photo: publicationImage[ Math.floor(Math.random() * 2) ],
    },
    {
      id: 7,
      text: publicationText,
      photo: publicationImage[ Math.floor(Math.random() * 2) ],
    }
  ])

  const [publicationArrayLength, setPublicationsArrayLength] = useState(userPublications.length);

  // Add new publication
  const handleAddNewPublication = (newPub, len) => {
    setPublicationsArrayLength(len + 1);
  }

  // Publication text and/or image modification function
  const handleSetPublication = () => {
    handleDisplayNotification(!displayNotifications);
  }

  const handleDeletePublication = () => {
    setPublicationsArrayLength(userPublications.length);
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
          user = { userData }
      ></Navbar>

      { displayNotifications && <Notifications monTableau = { notificationsArray }></Notifications> }

      <Main 
          notifsArray={ handleAddNotifications } 
          handleDisplayNotification = { handleDisplayNotification } 
          state = { displayNotifications }
          pubModification = { handleSetPublication }
          pubDelete = { handleDeletePublication }
      ></Main>
      {/* <Advertising></Advertising> */}
    </>
  )
}

export default MyApp
