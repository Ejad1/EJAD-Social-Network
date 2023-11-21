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
                <List sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper' }}>
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
