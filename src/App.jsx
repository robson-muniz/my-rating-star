import './index.css';
import Rating from './Rating.jsx';
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.classList.add("cursor-glow");
        document.body.appendChild(cursor);

        const moveCursor = (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            cursor.remove();
        };
    }, []);

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
