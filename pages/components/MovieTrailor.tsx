import React from "react";
import YouTube from "react-youtube";
import { useGet } from "restful-react";

const MovieTrailer = () => {
  const { data } = useGet({
    path: "Movie/GetAll",
  });
  if (!data) {
    return <div>Loading...</div>;
  }
  const movies = data.result;
  return (
    <div>
      <div className="container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-details">
            <h1>{movie.title}</h1>
            <img src={movie.image} />

            <video src={movie.trailer} />
            <video controls width="500px">
              <source src={movie.video} type="video/mp4" />
              
            </video>
            <p>Duration: {movie.duration}</p>
            <p>Starring: {movie.starring}</p>
            <p>Genre: {movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieTrailer;
