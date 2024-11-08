import { PropTypes } from "prop-types";
import fleche from '../../assets/caret-right-fill.svg'

export function ANotification({ notifTitle, notifContent }) {
    return (
        <div>
            <div className="notif-title">
                <img src={ fleche } alt="" />
                <h3>{ notifTitle }</h3>
            </div>
            <p>
                { notifContent }
            </p>
        </div>
    )
}

ANotification.propTypes = {
    notifTitle: PropTypes.string.isRequired,
    notifContent: PropTypes.string.isRequired
}
