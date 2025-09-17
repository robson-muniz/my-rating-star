function Star({ star, rating, hover, ratingClick, hoverEnter, hoverLeave }) {
    const isActive = star <= (hover || rating);

    return (
        <button
            onClick={() => ratingClick(star)}
            onMouseEnter={() => hoverEnter(star)}
            onMouseLeave={hoverLeave}
            className={`text-4xl transition-all duration-300 ease-out transform hover:scale-125 focus:outline-none focus:scale-125 ${
                isActive
                    ? 'text-amber-400 drop-shadow-lg filter drop-shadow-amber-400/60'
                    : 'text-gray-300 hover:text-amber-200'
            }`}
        >
            ★
        </button>
    );
}

export default Star;
