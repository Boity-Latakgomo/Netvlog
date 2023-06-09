import React from "react";
import styles from "./TrailorPreviewer.module.css";
import YouTube from "react-youtube";
import { movieProps } from "../../interfaces/movie";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface trailorPreviewerProps {
  movie: movieProps | undefined;
}

// YouTube video options
const opts = {
  height: "500",
  width: "900",
  playerVars: {
    // Add any additional parameters as needed (e.g., autoplay, controls)
  },
};

const TrailorPreviewer = ({ movie }: trailorPreviewerProps) => {
  return (
    <div className={styles.container}>
      {movie ? (
        <YouTube videoId={movie.trailer} opts={opts} />
      ) : (
        <div className={styles.bannerContainer}>
          <Carousel
            showArrows
            showIndicators
            showThumbs={false}
            showStatus={false}
            dynamicHeight
            autoPlay
            interval={3000}
            infiniteLoop
          >
            <img src="https://images.hellomagazine.com/horizon/landscape/4b644c0ec4ba-the-witcher-season-three-poster-henry-cavill.jpg" />
            <img src="https://images.hellomagazine.com/horizon/landscape/4b644c0ec4ba-the-witcher-season-three-poster-henry-cavill.jpg" />
            <img src="https://images.hellomagazine.com/horizon/landscape/4b644c0ec4ba-the-witcher-season-three-poster-henry-cavill.jpg" />
          </Carousel>
        </div>

        // <img
        //   src="https://images.hellomagazine.com/horizon/landscape/4b644c0ec4ba-the-witcher-season-three-poster-henry-cavill.jpg"
        //   className={styles.image}
        // />
      )}
    </div>
  );
};

export default TrailorPreviewer;
