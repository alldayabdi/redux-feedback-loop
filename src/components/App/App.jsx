import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Comments from '../Comments/Comments';

function App() {
  const fetchFeedback =() =>{
    axios.get('/api/feedback')
    .then ((response) => {
      const action = {
        type: 'SET_FEEDBACK',
        payload: response.data
      }
      dispatchEvent(action);
    }).catch( err => {
        alert('error in GET feedback');
        console.error(err)
      })
  }
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feeling
      {/* <Route path="/comments" component={Comments} /> */}
    </div>
    </Router>
  );
}





export default App;
