import React, { useEffect, useRef, useState } from "react";

const HomeGallery = ({ images }) => {
    const galleryRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (observer && galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    return (
        <div className="gallery no-scrollbar" ref={galleryRef}>
            {loaded &&
                images.map((img, i) => (
                    <img key={i} alt={`Image ${i}`} src={`/img/${img}`} />
                ))}
        </div>
    );
};

export default HomeGallery;
