import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';

import {useDispatch} from 'react-redux';

function Comments(){

  const history = useHistory();
  const dispatch = useDispatch();

  const [comments, setComments]= useState('')

  const handleComments = (event) =>{

  event.preventDefault();
    console.log('adding support', comments)
    dispatch({
      type: 'SET_COMMENTS',
      payload: comments
    })
  history.push('/review')

  }


return(
    <section>
          <header>
              <h1>Do you have any comments you would like to add?</h1>
              <input
              required 
              placeholder="Comments"
              value={comments}
              onChange={(event) =>setComments(event.target.value)}>
                <button onClick={handleNext}>Next</button>
              </input>
          </header>
      </section>
)
}
export default Comments;