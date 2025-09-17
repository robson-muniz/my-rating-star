import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button.jsx";

function Modal({ isOpen, onClose, rating }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 pointer-events-auto"
                    style={{ WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)", willChange: "opacity, transform" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4 shadow-2xl pointer-events-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        role="dialog"
                        aria-modal="true"
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Thank You!
                            </h2>
                            <p className="text-gray-600">
                                You rated us{" "}
                                <span className="font-semibold text-amber-600">
                  {rating}
                </span>{" "}
                                star{rating > 1 ? "s" : ""}
                            </p>
                        </div>
                        <Button
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-lg font-medium focus:ring-red-300 transform hover:scale-105 transition-transform"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
