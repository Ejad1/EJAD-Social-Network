import { createContext, useEffect, useState } from 'react'
import { Navbar } from './Nav'
import { Main } from './Main'
// import { Advertising } from './composants/Advertising'
import { Notifications } from './Notifications/Notifications'
import imagePublication from '../assets/cat.jpg'
import dogImage from '../assets/dog.jpg'
import socialImage from '../assets/social.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function MyApp() {
  // Recuparation of the user infos
  const infos = useParams();
  const [userData, setUserData] = useState(null);
  const [publications, setPublications] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Getting the user informations
      try {
        await axios.get(`http://localhost:3000/api/user/${infos.userId}`)    
            .then(response => {
              const data = response.data;
              let UserInformations = createContext(data);
              console.log("Mon contexte est : ", UserInformations);
              setUserData(data);
            })
            .catch(error => {
              console.error('Une erreur s\'est produite:', error);
            });
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      }

      console.log("Mes informations du contexte sont : ", userData);

      // Getting all the publications
      try {
        await axios.get("http://localhost:3000/api/publications/get")
          .then(response => {
            const pubs = response.data;
            setPublications(pubs);
          })
          .catch(error => console.log("Une erreur s'est produite:", error));
      } catch (error) {
        console.log("Erreur lors de la récupération des publications : ", error);
      }
    };

    fetchData();
  }, [infos, userData]);



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
    setUserPublications((prevPubs) => [newPub ,...prevPubs]);

    setPublicationsArrayLength(len + 1);
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

    useEffect[() => {
      const copy = [...userPublications];
      for (let i = 0; i < userPublications.length; i++) {
        copy[i].id = i + 1;
      }
      setUserPublications(copy);
    }, userPublications]

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
          pubsArray = { userPublications }
          pubModification = { handleSetPublication }
          pubDelete = { handleDeletePublication }
      ></Main>
      {/* <Advertising></Advertising> */}
    </>
  )
}

export default MyApp
