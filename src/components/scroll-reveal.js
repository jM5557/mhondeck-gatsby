import React, { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ children, transitionDelay = "500ms" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const revealElement = revealRef.current;
    const onScroll = () => {
      if (revealElement) {
        const top = revealElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', onScroll);
    // Initial check
    onScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={revealRef} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{
        transitionDelay
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
