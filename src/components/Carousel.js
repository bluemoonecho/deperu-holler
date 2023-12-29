import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length]);

  const goToLeft = () => {
    const nextIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const goToRight = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <div
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black text-white rounded-full cursor-pointer select-none z-10 text-4xl p-1 px-2 flex align-center"
            onClick={goToLeft}
          >
            &lt;
          </div>
          <div
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black text-white rounded-full cursor-pointer select-none z-10 text-4xl p-1"
            onClick={goToRight}
          >
            &gt;
          </div>
        </>
      )}
      <img
        src={images[currentImageIndex]}
        alt="Carousel"
        className="w-full h-full object-cover transition-transform duration-500 animate-zoom"
      />
    </div>
  );
};

export default Carousel;
