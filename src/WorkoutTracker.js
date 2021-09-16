import AbTracker from './AbTracker';
import LungeTracker from './LungeTracker';
import SquatTracker from './SquatTracker';

const WorkoutTracker = props => {
    return (
        <div className="workoutList">
            <h1>WorkoutTracker</h1>
            <div>
                <AbTracker />
                <LungeTracker />
                <SquatTracker />
            </div>
        </div>
    );
}

export default WorkoutTracker;