import React, {useState} from 'react';


const LungeTracker = props => {
    const [state, setState] = useState({
        lungePoints: 0
    });

        const increaseLunge = () => {

        const newLungePoints = state.lungePoints >= 100 ? 100 : state.lungePoints + 1;

            setState({
                lungePoints: newLungePoints
            });
        }

        const clearWorkout = () => {
            setState({
                sets: state.lungePoints = 0
              });
        }


    return (
        <div className="listWorkout">
            <h3>Lunge Tracker</h3>
            <p>You have done: {state.lungePoints} lunge workouts.</p>
            <button onClick={increaseLunge}>Keep going!</button>
            <button onClick={clearWorkout}>All Finished!</button>

        </div>
    )

}

export default LungeTracker;