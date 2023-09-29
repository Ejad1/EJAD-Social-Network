import { PropTypes } from "prop-types";
import '../css/Notifications.css'
import { ANotification } from './ANotification'

export function Notifications({ monTableau }) {

    return (
        <aside>
            <h2>Notifications</h2>
            {
                monTableau.map((element, index) => (
                    <ANotification notifTitle={ element.title } notifContent={ element.content } key={ index }></ANotification>
                ))
            }
        </aside>
    )
}

Notifications.propTypes = {
    monTableau: PropTypes.array.isRequired
}
