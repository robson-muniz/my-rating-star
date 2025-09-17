import { useState } from "react";
import Star from "./Star.jsx";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";
import confetti from 'canvas-confetti';

const Rating = ({ heading = "Rate Your Experience", feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'] }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const stars = Array.from({ length: 5 }, (_, i) => i + 1);

    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true);
            // fire a subtle confetti burst
            confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#6366F1', '#8B5CF6', '#EC4899', '#F472B6', '#FBBF24']
            });
        }
    };

    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    };

    const getFeedbackColor = (rating) => {
        const colors = {
            1: 'text-red-500',
            2: 'text-orange-500',
            3: 'text-yellow-500',
            4: 'text-blue-500',
            5: 'text-green-500'
        };
        return colors[rating] || 'text-gray-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
            {/* make the card inert while modal is open so underlying hover events don't fire */}
            <div
                className={`bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 ${submitted ? 'pointer-events-none select-none' : 'hover:scale-105'}`}
                aria-hidden={submitted}
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{heading}</h2>
                    <p className="text-gray-600">We'd love to hear your feedback</p>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-2 mb-6">
                    {stars.map((star) => (
                        <Star
                            key={star}
                            star={star}
                            rating={rating}
                            hover={hover}
                            ratingClick={setRating}
                            hoverEnter={setHover}
                            hoverLeave={() => setHover(0)}
                        />
                    ))}
                </div>

                {/* Feedback Message */}
                {rating > 0 && (
                    <div className="text-center mb-6 animate-fade-in">
                        <p className={`text-xl font-semibold ${getFeedbackColor(rating)} transition-all duration-300`}>
                            {feedbackMessages[rating - 1]}
                        </p>
                    </div>
                )}

                {/* Submit Button */}
                <div className="text-center">
                    <Button
                        className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform ${
                            rating === 0
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white hover:scale-105 focus:ring-indigo-300 shadow-lg hover:shadow-xl'
                        }`}
                        disabled={rating === 0}
                        onClick={handleSubmit}
                    >
                        Submit Rating
                    </Button>
                </div>

                <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
            </div>
        </div>
    );
};

export default Rating;
