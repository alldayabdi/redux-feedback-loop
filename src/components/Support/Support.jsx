import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react'

function Support(){

const [support, setSupport] = useState('');

const history = useHistory();
const dispatch = useDispatch();

    const handleSupport = (event) =>{
    event.preventDefault();
    if(support === ''){
        alert('Cannot continue: select a rating to continue')
        return false
    } else if(support > 5) {
        alert('Cannot continue: must select a number between 0 and 5')
        return false
    }else{
    console.log('adding support', {support})

    dispatch({
        type: 'SET_SUPPORT',
        payload: support
    })
    history.push('/comments')
    }}

return(
    <section>
          <header>
              <h1>Did you feel supported today?</h1>
              <form onSubmit={handleSupport}>
              <input
              required 
              placeholder="out of 5"
              value={support}
              onChange={(event) =>setSupport(event.target.value)}>
              </input>
              </form>
          </header>
      </section>
)
}
export default Support; 
