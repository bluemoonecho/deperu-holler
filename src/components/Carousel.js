import React, { useState, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

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
      // onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={images[currentImageIndex]}
        alt="Carousel"
        className="w-full h-full object-cover transition-transform duration-500"
      />{" "}
      <div
        className="absolute inset-0 flex justify-between items-center"
        onMouseEnter={() => setIsHovered(true)}
      >
        {isHovered && (
          <>
            <div
              className="absolute top-1/2 left-4 -translate-y-1/2 opacity-75 cursor-pointer select-none z-10 text-4xl"
              onClick={goToLeft}
              onMouseEnter={() => setIsHovered(true)}
            >
              <FaCircleChevronLeft />
            </div>
            <div
              className="absolute top-1/2 right-4 -translate-y-1/2 opacity-75 cursor-pointer select-none z-10 text-4xl"
              onClick={goToRight}
              onMouseEnter={() => setIsHovered(true)}
            >
              <FaCircleChevronRight />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
