import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review(){
const feedbackReducer = useSelector( state => state.feedbackReducer)
const history = useHistory();
      const handleFeeling = () => {
      console.log('handleFeeling clicked!');
      axios.post('/api/feedback', feedbackReducer
      ).then((response) =>{
        console.log('sending rating', response);
        history.push('/success')

      }).catch(function (error) {
        console.log('Error on Post:', error);
      });
    }

      return(
    <div>
    <h2>Review Your Feedback</h2>

    <p> {feedbackReducer.feeling}</p>
    <p> {feedbackReducer.understanding}</p>
    <p> {feedbackReducer.support}</p>
    <p> {feedbackReducer.comments}</p>

    <button onClick={handleFeeling}>Submit</button>
    </div>
      )
}export default Review;