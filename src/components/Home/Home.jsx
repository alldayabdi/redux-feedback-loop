import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Home(){
    const dispatch = useDispatch();
  const history = useHistory();

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () =>{
      axios.get('/api/feedback')
      .then((response) =>{
          console.log(response.data);
          setFeedback(response.data);
      }).catch((error) => {
        alert('error in getting Feedback from server');
        console.log(error);
      });
  }

  function startSurvey(){
    history.push('/feeling')
}
  return(
    <section>
      <h2>
          Welcome, please start the survey by pressing the start button below.
      </h2>
      <button onClick= {startSurvey}>start</button>
    </section>
)
} export default Home; // end of axios get
