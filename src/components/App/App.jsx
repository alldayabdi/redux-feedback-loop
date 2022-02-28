import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//import components
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
//import Admin from '../Admin/Admin';
import Review from '../Review/Review';
import Success from '../Success/Success';

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
        <Route path="/feeling"  component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} /> 
        <Route path="/comments" component={Comments} />
        {/* <Route path="/admin" component={Admin} /> */}
        <Route path="/review"  component={Review} />
        <Route path="/" exact component={Home} />
        <Route path="/success" component={Success} />
    </div>
    </Router>
  );
}

export default App;
