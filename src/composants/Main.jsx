import { PropTypes } from "prop-types";
import { useState } from 'react'
import { Publication } from './Publication'
import '../css/Main.css'
import imagePublication from '../assets/cat.jpg'

export function Main({ array }) {
    const publicationText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a dolore veritatis, ";
    const publicationImage = imagePublication;

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
    }

    return (
        <main>
            {
                userPublications.map(aPublication =>
                    <Publication
                        key = { aPublication.id }
                        id = { aPublication.id }
                        content = { aPublication.text }
                        imageSource = { aPublication.photo }
                        modifications = { handleSetPublication }
                        addNotifs = { array }
                    />
                )
            }    
        </main>
    )
}

Main.propTypes = {
    array: PropTypes.func.isRequired
}
