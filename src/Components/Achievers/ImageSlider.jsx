import { useState, useEffect } from "react";

const sliderStyles = {
  position: "relative",
  height: "100%",
  overflow: "hidden",
};

const slideContainerStyles = {
  display: "flex",
  transition: "transform 1s ease-in-out", 
  height: "100%",
};

const slideStyles = {
  minWidth: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#DA1F24",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#DA1F24",
  zIndex: 1,
  cursor: "pointer",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  color: "#F6F7FD",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "#DA1F24",
};

const ImageSlider = ({ slides, autoScroll = true, autoScrollInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(goToNext, autoScrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoScroll, autoScrollInterval]);

  return (
    <div style={sliderStyles}>
      <div style={{ ...slideContainerStyles, transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ ...slideStyles, backgroundImage: `url(${slide.url})` }}
          ></div>
        ))}
      </div>
      <div onClick={goToPrevious} style={leftArrowStyles}>
        &#10094;
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        &#10095;
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyle}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
