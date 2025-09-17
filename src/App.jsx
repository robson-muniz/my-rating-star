import './index.css';
import Rating from './Rating.jsx';

function App() {
    const customFeedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

    return (
        <div className="App">
            <Rating
                heading="Rate Your Experience"
                feedbackMessages={customFeedbackMessages}
            />
        </div>
    );
}

export default App;
