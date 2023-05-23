import React, { useState, useEffect } from "react";
import { movieProps } from "./interfaces/movie";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
// import styles from "./styles.module.css";
import { useGet } from "restful-react";
import TrailorPreviewer from "./components/trailorPreviewer/TrailorPreviewer";
import MostViewed from "./components/mostViewed/MostViewed";
import { movies } from "../utils/demoMovieData";
import { useRouter } from "next/router";
import { useMovie } from "../providers/movies";
import { Result } from "antd";

//   const { data } = useGet({

//     path: "Movie/GetAll",
//   });
//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   const movies = data.result;
//   return (
//     <div>
//       <div className="container">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-details">
//             <h1>{movie.title}</h1>
//             <img src={movie.image} />

//             <video src={movie.trailer} />
//             <video controls width="500px">
//               <source src={movie.video} type="video/mp4" />

//             </video>
//             <p>Duration: {movie.duration}</p>
//             <p>Starring: {movie.starring}</p>
//             <p>Genre: {movie.genre}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieTrailer;

const TrailerPage = () => {
  const router = useRouter();
  const {
    title,
    genre,
    duration,
    starring,
    image,
    trailer,
    video,
    views,
    releaseDate,
  } = router.query;

  let initialMovieTrailer: movieProps | undefined;

  const { fetchMovies,moviesFetched } = useMovie();
  const { data, refetch: retrieve } = useGet({
    path: "Movie/GetAll",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  if (title) {
    initialMovieTrailer = {
      title: title.toString(),
      genre: genre.toString(),
      duration: duration.toString(),
      starring: starring.toString(),
      image: image.toString(),
      trailer: trailer.toString(),
      video: video.toString(),
      view: views.toString(),
      releaseDate: releaseDate.toString(),
    };
  }

  const [selectedMovieTrailer, setSelectedMovieTrailer] = useState<
    movieProps | undefined
  >(initialMovieTrailer);

  // Methods
  const setMovieTrailerSelected = (movie: movieProps) => {
    setSelectedMovieTrailer(movie);
  };

  // const sortedMovies = movies.sort(
  //   (a: movieProps, b: movieProps) =>
  //     b.releaseDate.getTime() - a.releaseDate.getTime()
  // );
  const sortedMovies = moviesFetched.sort(
    (a: movieProps, b: movieProps) =>
      new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
  );
  


  const latestMovies = sortedMovies.slice(0, 5);

  return (
    <div className={styles.container}>
      <NavBar />
      {/* <TrailorPreviewer trailer={movieTrailers[4].trailer} /> */}
      <TrailorPreviewer movie={selectedMovieTrailer} />
      <MostViewed
        latestMovies={latestMovies}
        setMovieTrailerSelected={setMovieTrailerSelected}
      />
    </div>
  );
};

export default TrailerPage;
