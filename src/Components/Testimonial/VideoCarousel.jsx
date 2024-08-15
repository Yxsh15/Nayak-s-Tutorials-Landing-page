import "./VideoCarousel.css";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "../videos/vid1.mp4";
import Vid2 from "../videos/vid2.mp4";
import Vid3 from "../videos/vid3.mp4";
import Vid4 from "../videos/vid4.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
  const [playingIndex, setPlayingIndex] = useState(null); // Track which video is playing
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  const videoProperties = [
    {
      id: 1,
      title: "Aditi Paithankar ",
      src: Vid1,
      credit: "X ICSE - 97.2%",
    },
    {
      id: 2,
      title: " Avani Shendarkar",
      src: Vid2,
      credit: "X CBSE - 95.40% ",
    },
    {
      id: 3,
      title: "Anusmita Majumdar",
      src: Vid3,
      credit: "X ICSE -  98.2%",
    },
    {
      id: 4,
      title: "Vedashree Sawant",
      src: Vid4,
      credit: "X SSC -  94.4%",
    },
  ];

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    setPlayingIndex(null); // Stop any playing video when manually switching slides
  };

  const handleVideoEnd = () => {
    const nextIndex = activeIndex === videoProperties.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex); // Move to the next slide
    setPlayingIndex(null); // Reset playingIndex
  };

  return (
    <div className="App">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {videoProperties.map((videoObj, index) => (
          <Carousel.Item key={videoObj.id}>
            <div onClick={() => handlePlay(index)}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={playingIndex === index} // Only play if this is the selected video
                volume={0.3}  // Set volume to 30%
                width="100%"
                height="100%"
                onEnded={handleVideoEnd} // Move to next slide when video ends
              />
            </div>
            <Carousel.Caption>
              <h3>{videoObj.title}</h3>
              <p>{videoObj.credit}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
