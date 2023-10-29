import { PropTypes } from "prop-types";
import '../../../../css/UserAnswer.css'
// import { Chip } from "@mui/material";

export function UserAnswer({ answer }) {
    return (
        <div className="user-answer">
            {/* <Chip 
                sx={{
                    height: 'auto',
                    color: 'black',
                    padding: '10px',
                    fontSize: '15px',
                    position: 'relative',
                    left: '82%',
                    marginBottom: '5px',
                    width: 'fit-content',
                    minWidth: '150px',
                    maxWidth: '500px',
                    overflow: 'hidden',
                    transform: 'translateX(-82%)'
                }}
                label={ answer } color="primary" variant="outlined" 
            /> */}
            <p>
                { answer }
            </p>
        </div>    
    )
}

UserAnswer.propTypes = {
    answer: PropTypes.string.isRequired,
}
