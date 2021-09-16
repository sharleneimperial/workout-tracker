import React, {useState} from 'react';


const AbTracker = props => {
    const [state, setState] = useState({
        abPoints: 0
    });

        const increaseAbs = () => {

        const newAbPoints = state.abPoints >= 100 ? 100 : state.abPoints + 1;

            setState({
                abPoints: newAbPoints
            })
        }

        const clearWorkout = () => {
            setState({
                sets: state.abPoints = 0
              })
        }

    return (
        <div className="listWorkout">
            <h3>Ab Tracker</h3>
            <p>You have done: {state.abPoints} Ab workouts.</p>
            <button onClick={increaseAbs}>Keep going!</button>
            <button onClick={clearWorkout}>All Finished!</button>

        </div>
    )

}

export default AbTracker;