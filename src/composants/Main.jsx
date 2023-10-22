import { PropTypes } from "prop-types";
import { Publication } from './Publications/Publication'
import '../css/Main.css'

export function Main({ notifsArray, handleDisplayNotification, state, pubsArray, pubModification, pubDelete }) {
    const publicationsArray = pubsArray;
   
    return (
        <main>
            {
                publicationsArray.map(aPublication =>
                    <Publication
                        key = { aPublication.id }
                        id = { aPublication.id }
                        content = { aPublication.text }
                        imageSource = { aPublication.photo }
                        modifications = { pubModification }
                        deletePub = { pubDelete }
                        addNotifs = { notifsArray }
                        handleDisplayNotification = { handleDisplayNotification }
                        state = { state }
                    />
                )
            }    
        </main>
    )
}

Main.propTypes = {
    notifsArray: PropTypes.func.isRequired,
    handleDisplayNotification: PropTypes.func.isRequired,
    state: PropTypes.bool.isRequired,
    pubsArray: PropTypes.array.isRequired, 
    pubModification: PropTypes.func.isRequired,
    pubDelete: PropTypes.func.isRequired
}
