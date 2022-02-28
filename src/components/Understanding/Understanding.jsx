import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

function Understanding() {

    const [understand, setUnderstand] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();


    const handleUnderstanding = (event) => {
        event.preventDefault();
        if (understand === '') {
            alert('Cannot continue: select a rating to continue')
            return false
        } else if (understand > 5) {
            alert('Cannot continue: must select a number between 0 and 5')
            return false
        } else {
            console.log('adding understanding', {});

            dispatch({ type: 'SET_UNDERSTANDING', payload: understand })


        }
    }

    const handleNext = () => {
        history.push('/support');
    }


    return (
        <section>
            <header>
                <h1>How did you understand the material today??</h1>
                <form onSubmit={handleUnderstanding}>
                    <input
                        type='number'
                        required
                        placeholder="on a scale of: 0 to 5"
                        value={understand}
                        onChange={(event) => setUnderstand(event.target.value)}>
                    </input>
                </form>
                <button onClick={handleNext}>Next</button>
            </header>
        </section>
    )
}
export default Understanding;