import { useContext, useEffect } from 'react'
import { Navbar } from './Navbar/Nav'
import { Main } from './Main'
import { UserContext } from './Contexts/UserDataContext'
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

  

  return (
    <>
      <Navbar
          user = { userData }
      ></Navbar>

      <Main> </Main>
    </>
  )
}

export default MyApp
