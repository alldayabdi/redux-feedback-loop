import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling() {
    const [feeling, setFeeling] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleFeeling = (event) => {
        event.preventDefault();
        if (feeling === '') {
            alert('Cannot continue: select a rating to continue')
            return false
        } else if (feeling > 5) {
            alert('Cannot continue: must select a number between 0 and 5')
            return false
        } else {
            console.log('adding feeling', feeling);
            dispatch({ type: 'SET_FEELING', payload: feeling })
            history.push('/understanding');
        }
    }

    return (
        <section>
            <header>
                <h1>How are you feeling today?</h1>
                <form onSubmit={handleFeeling}>
                    <input
                        required
                        placeholder="Describe your feeling"
                        value={feeling}
                        onChange={(event) => setFeeling(event.target.value)}>
                    </input>
                </form>
            </header>
        </section>
    )
}
export default Feeling;