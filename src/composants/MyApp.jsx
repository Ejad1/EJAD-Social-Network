import { useContext, useEffect, useRef } from 'react'
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
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (hasFetchedData.current) return; // Empêche les nouvelles exécutions après la première
    hasFetchedData.current = true;

    const fetchData = async () => {
      // Getting all the publications
      try {
        const savedPublications = localStorage.getItem('publications');
        if (savedPublications) {
          setPublications(JSON.parse(savedPublications));
        } else {
          const response = await axios.get("http://localhost:3000/api/publications/get");
          setPublications(response.data);
          localStorage.setItem('publications', JSON.stringify(response.data));
        }
      } catch (error) {
        console.log("Erreur lors de la récupération des publications : ", error);
      }

      // Getting the user informations
      try {
        const savedUserData = localStorage.getItem(`user_${infos.userId}`);
        if (savedUserData) {
          setUserData(JSON.parse(savedUserData));
        } else {
          const response = await axios.get(`http://localhost:3000/api/user/${infos.userId}`);
          const data = response.data;
          setUserData(data);
          localStorage.setItem(`user_${infos.userId}`, JSON.stringify(data));
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      }
    };

    fetchData();
  }, [infos, setUserData, setPublications]);

  

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
