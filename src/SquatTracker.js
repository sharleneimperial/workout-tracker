import React, {useState} from 'react';

const SquatTracker = props => {
    const [state, setState] = useState({
        squatPoints: 0
    });

        const increaseSquats = () => {

        const newSquatPoints = state.squatPoints >= 100 ? 100 : state.squatPoints + 1;

            setState({
                squatPoints: newSquatPoints
            });
        }

        const clearWorkout = () => {
            setState({
                sets: state.squatPoints = 0
              });
        }

    return (
        <div className="listWorkout">
            <h3>Squat Tracker</h3>
            <p>You have done: {state.squatPoints} squats.</p>
            <button onClick={increaseSquats}>Keep going!</button>
            <button onClick={clearWorkout}>All Finished!</button>

        </div>
    )

}

export default SquatTracker;