import {useHistory} from 'react-router-dom';

function Success() {
    const history = useHistory();

    function returnHome(){
    history.push('/')
    }


    return(
        <section>
            <header>
                <h1>
                    SUCCESS!
                </h1>
            </header>
            <p>Your survey has been submitted</p>
            <p>Click on the button below to return Home</p>
            <button onClick={returnHome}>Return Home</button>
        </section>
    )
}export default Success;