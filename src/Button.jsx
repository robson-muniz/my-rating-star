function Button({ children, className, disabled, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`${className} transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;