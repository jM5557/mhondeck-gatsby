import React, { useState, useEffect } from "react";

const Modal = ({ children, className = "" }) => {
    return (
        <div className={`modal ${className}`}>
            {children}
        </div>
    )
}

export const UseModal = () => {
    let [showModal, setShowModal] = useState(false);

    const ModalComponent = ({ children, className, onExit }) => {

        const onExitModal = () => {
            setShowModal(false);
            if (onExit)
                onExit();
        }

        useEffect(() => {
            // Function to handle 'Escape' key press
            const handleEsc = (event) => {
                if (event.key === 'Escape') {
                    onExitModal();
                }
            };

            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

            // Function to handle Android back button
            const handleBackButton = () => {
                onExitModal();
                
                if(isAndroid) {
                    window.history.pushState(
                        null, 
                        null, 
                        window.location.href
                    );
                }
            };

            // Add event listeners for 'keydown' and 'popstate'
            window.addEventListener('keydown', handleEsc);
            window.addEventListener('popstate', handleBackButton);

            // Push a new state so the back button can trigger popstate event
            if (showModal && isAndroid) {
                window.history.pushState(
                    null, 
                    null, 
                    window.location.href
                );
            }

            // Cleanup event listeners when component unmounts or modal is closed
            return () => {
                window.removeEventListener('keydown', handleEsc);
                window.removeEventListener('popstate', handleBackButton);
                if (showModal && isAndroid) {
                    window.history.back(); // Go back one step in history when modal is closed
                }
            };
        }, []);

        if (!showModal) return <></>;

        return (
            <Modal className={className}>
                {children}

                <button
                    type="button"
                    onClick={onExitModal}
                    className="cta exit"
                >
                    Exit
                </button>
            </Modal>
        )
    }

    return {
        showModal,
        setShowModal,
        ModalComponent
    }
}