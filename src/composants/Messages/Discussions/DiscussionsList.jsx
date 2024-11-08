<<<<<<< HEAD
import { PropTypes } from "prop-types";
import List from '@mui/material/List';
import { ADiscussion } from "./ADiscussions";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserDataContext";

export function DiscussionsList({ discussionsList, callback }) {
    const discussions = discussionsList;

    const { userData, setUserData } = useContext(UserContext);

    console.log("Le local storage est : ", localStorage.getItem(`user_${userData._id}`));

    useEffect( () => {
        const fetchData = async () => {
            // Getting the user informations
            try {
                const savedUserData = localStorage.getItem(`user_${userData._id}`);
                if (savedUserData) {
                setUserData(JSON.parse(savedUserData));
                } else {
                const response = await axios.get(`http://localhost:3000/api/user/${userData._id}`);
                const data = response.data;
                setUserData(data);
                localStorage.setItem(`user_${userData._id}`, JSON.stringify(data));
                console.log("Je fais le set et le storage est : ", localStorage.getItem(`user_${userData._id}`));
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
            }
        }
        fetchData();
    }, []);

    console.log("Le userData stpcké en local est : ", localStorage.getItem(`user_${userData._id}`));

    if (discussions.length === 0) {
        return (
            <section className="discussions-list">
                <h2>There are no discussions that match your search</h2>
            </section>
        )
    }
    else {
        return (
           <section className="discussions-list">
                {
                    userData.nbFriends > 0 ?
                    <List sx={{ width: '100%', maxWidth: 760, minHeight: 500, bgcolor: 'background.paper' }}>
                        {
                            discussions.map((element, index) => (
                                <ADiscussion 
                                    key={ index }
                                    callback = { callback }
                                    nom = { element.discussionName }
                                    message = { element.message }
                                    discussion = { element }
                                ></ADiscussion>
                            ))
                        }
                    </List>
                    : <h2>There are no discussions for this user</h2>
                }
                
           </section>
        )
    }
}

DiscussionsList.propTypes = {
    discussionsList: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
}
=======
import { PropTypes } from "prop-types";
import List from '@mui/material/List';
import { ADiscussion } from "./ADiscussions";

export function DiscussionsList({ discussionsList, callback }) {
    const discussions = discussionsList;

    if (discussions.length === 0) {
        return (
            <section className="discussions-list">
                <h2>There are no discussions that match your search</h2>
            </section>
        )
    }
    else {
        return (
           <section className="discussions-list">
                <List sx={{ width: '100%', maxWidth: 760, minHeight: 500, bgcolor: 'background.paper' }}>
                    {
                        discussions.map((element, index) => (
                            <ADiscussion 
                                key={ index }
                                callback = { callback }
                                nom = { element.discussionName }
                                message = { element.message }
                                discussion = { element }
                            ></ADiscussion>
                        ))
                    }
                </List>
           </section>
        )
    }
}

DiscussionsList.propTypes = {
    discussionsList: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
