import { useState } from 'react'
import { Publication } from './Publication'
import '../css/Main.css'
import imagePublication from '../assets/cat.jpg'

export function Main() {
    const [publicationText, setPublicationText] = useState(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a dolore veritatis, "
    )

    const userPublications = [
        {
            id: 1,
            text: publicationText,
            photo: "",
        },
        {
            id: 2,
            text: publicationText,
            photo: "",
        },
        {
            id: 3,
            text: publicationText,
            photo: "",
        },
        {
            id: 4,
            text: publicationText,
            photo: "",
        },
        {
            id: 5,
            text: publicationText,
            photo: "",
        },
        {
            id: 6,
            text: publicationText,
            photo: "",
        },
        {
            id: 7,
            text: publicationText,
            photo: "",
        }
    ]

    return (
        <main>
            {
                userPublications.map(aPublication =>
                    <Publication
                        key = { aPublication.id }
                        content = { aPublication.text }
                        imageSource = { imagePublication }
                    />
                )
            }    
        </main>
    )
}
