import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

import { useDispatch } from 'react-redux';

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comments, setComments] = useState('')

    const handleComments = (event) => {

        event.preventDefault();
        console.log('adding support', comments)
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })
        history.push('/review')

    }


    return (
        <section>
            <header>
                <h1>Do you have any comments you would like to add?</h1>
                <form onSubmit={handleComments}>
                    <input
                        required
                        placeholder="Comments"
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}>

                    </input>
                    <button type="submit">Next</button>
                </form>
            </header>
        </section>
    )
}
export default Comments;