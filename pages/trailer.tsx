import React, { useState, useEffect } from "react";
import { movieProps } from "./interfaces/movie";
import NavBar from "./components/navBar/NavBar";
import styles from "./components/styles.module.css";
// import styles from "./styles.module.css";
import { useGet } from "restful-react";
import TrailorPreviewer from "./components/trailorPreviewer/TrailorPreviewer";
import MostViewed from "./components/mostViewed/MostViewed";

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

const movies: movieProps[] = [
  {
    title: "Kate",
    trailer: "MysGjRS9jFU",
    duration: "2h30",
    genre: "Action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Kate_%28film%29.jpg/220px-Kate_%28film%29.jpg",
    releaseDate: new Date(2021, 4, 18),
    starring: "Kate",
    video: "",
    views: 30000,
  },
  {
    title: "Fast X",
    trailer: "aOb15GVFZxU",
    duration: "2h12",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    releaseDate: new Date(2023, 5, 18),
    starring: "Vin",
    video: "",
    views: 10000,
  },
  {
    title: "Wrath of man",
    trailer: "my4eXuV0MbI",
    duration: "2h01",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVkOTlhOTktNjZiNS00NDg3LWIxMDAtZTY5Y2E0YjllN2IxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: new Date(2019, 4, 14),
    starring: "Jason stathan",
    video: "",
    views: 20000,
  },
  {
    title: "Bloodshot",
    trailer: "3puiKNZf73o",
    duration: "1h50",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGI5MTY2MmYtZDc3Ny00NWJhLWEyMDMtN2Q3MWZlNDVjYjU2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    releaseDate: new Date(2018, 6, 28),
    starring: "Vin",
    video: "",
    views: 25000,
  },
  {
    title: "The Mother",
    trailer: "Awmni5mbyWE",
    duration: "2h04",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BODlmZThjZGItOGRmMC00ODVjLWIzYWMtODBhYzQyZjE4NWE5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    releaseDate: new Date(2023, 4, 12),
    starring: "Jennifer Lopez",
    video: "",
    views: 18000,
  },
  {
    title: "Megan",
    trailer: "BRb4U99OU80",
    duration: "2h30",
    genre: "Thriller",
    image: "https://i.ytimg.com/vi/8XDqcqUjq5M/movieposter_en.jpg",
    releaseDate: new Date(2023, 1, 20),
    starring: "Dolli",
    video: "",
    views: 33000,
  },
  {
    title: "Mirrors 2",
    trailer: "5HZ9WM2W0pg",
    duration: "2h30",
    genre: "Horror",
    image: "https://upload.wikimedia.org/wikipedia/en/8/86/Mirrors_2.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Linah",
    video: "",
    views: 34000,
  },
  {
    title: "The Town",
    trailer: "5HZ9WM2W0pg",
    duration: "2h39",
    genre: "Action",
    image: "https://upload.wikimedia.org/wikipedia/en/8/86/Mirrors_2.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Linah",
    video: "",
    views: 34000,
  },
  {
    title: "Extraction",
    trailer: "L6P3nI6VnlY",
    duration: "2h40",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZmM2UyOTEtMGJjZC00ODYyLWJmYzgtYmU0Nzk0MDA5NjM2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Linah",
    video: "",
    views: 34000,
  },
  {
    title: "The Old Guard",
    trailer: "IfMYhSX0",
    duration: "2h459",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTY5YTk0ZDMtODg0Zi00OGM4LTgxMTQtODAzODg2ZjE2MmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Linah",
    video: "",
    views: 34000,
  },
  {
    title: "Triple Frontier",
    trailer: "us79YXHPqZQ",
    duration: "2h45",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BODU4MzM2MDAxMl5BMl5BanBnXkFtZTgwNDEzNjM0NzM@._V1_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Linah",
    video: "",
    views: 34000,
  },
  {
    title: "6 Underground",
    trailer: "XcIuFTrLS6g",
    duration: "1h59",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Linah",
    video: "",
    views: 34000,
  },
  {
    title: "Marry Me",
    trailer: "Ebv9_rNb5Ig",
    duration: "1h59",
    genre: "Action",
    image:
      "https://thegalileo.co.za/wp-content/uploads/2022/09/Marry-Me-scaled.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Jennifer Lopez",
    video: "",
    views: 34000,
  },
  {
    title: "The Notebook",
    trailer: "FC6biTjEyZw",
    duration: "2h09",
    genre: "Romance",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2I3ZmRjODAtMjBiNy00ZmEwLWEzZjItZjM4NGZhNGYyNTA0XkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Jennifer Lopez",
    video: "",
    views: 34000,
  },
  {
    title: "Ghosted",
    trailer: "IAdCsNtEuBU",
    duration: "2h01",
    genre: "Action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGMzYWZlYmYtNTcyMC00ZGVjLThjN2ItMjY4MjkwN2NlMjYwXkEyXkFqcGdeQXVyOTU0NjY1MDM@._V1_FMjpg_UX1000_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Jennifer Lopez",
    video: "",
    views: 34000,
  },
  {
    title: "Someone great",
    trailer: "BBd9gcrj2Wk",
    duration: "2h30",
    genre: "Romance",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI5MzQ0NjA5Ml5BMl5BanBnXkFtZTgwNjA1MTg1NzM@._V1_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Jennifer Lopez",
    video: "",
    views: 34000,
  },
  {
    title: "The Half of it",
    trailer: "NwykZtO7G8E",
    duration: "2h36",
    genre: "Romance",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2RlZmZkOTUtMDI5Ni00ZjZmLWI1OTItZmUwNWE4ZWVjNzFiXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Jennifer Lopez",
    video: "",
    views: 34000,
  },
  {
    title: "The Perfect Date",
    trailer: "Hld-7oBn3Rk",
    duration: "2h39",
    genre: "Romance",
    image:
      "https://images.justwatch.com/poster/124369722/s592/the-perfect-date",
    releaseDate: new Date(2010, 2, 3),
    starring: "Jennifer Lopez",
    video: "",
    views: 34000,
  },
  {
    title: "The Perfect Guy",
    trailer: "A8vSTOl8F6M",
    duration: "2h58",
    genre: "Romance",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzcxNjU2OTk1OV5BMl5BanBnXkFtZTgwODY3MjI5NTE@._V1_.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Sanna Lathan",
    video: "",
    views: 34000,
  },
  {
    title: "Carol",
    trailer: "EH3zcuRQXNo",
    duration: "2h39",
    genre: "Romance",
    image:
      "https://static.metacritic.com/images/products/movies/3/a37a10a2b37af5fd71f23b4b160fe164-250h.jpg",
    releaseDate: new Date(2010, 2, 3),
    starring: "Jennifer Lopez",
    video: "",
    views: 34000,
  },
  {
    title: "With This Ring",
    trailer: "56V3E54wKTg",
    duration: "2h39",
    genre: "Romance",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQzMzM1NTk5M15BMl5BanBnXkFtZTgwODIzMzI2NTE@._V1_.jpg",
    releaseDate: new Date(2015, 2, 3),
    starring: "Regina Hall",
    video: "",
    views: 34000,
  },
  {
    title: "Little",
    trailer: "tKwhs5u9z8c",
    duration: "2h39",
    genre: "Comedy",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQwZmUwY2ItY2JhZC00NTM5LWEyYTQtYjg0MzE1NjFmNmY5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    releaseDate: new Date(2019, 2, 3),
    starring: "Regina Hall",
    video: "",
    views: 34000,
  },
  {
    title: "What Men Want",
    trailer: "Jz3EBiFJmwk",
    duration: "2h39",
    genre: "Comedy",
    image:
      "https://media0018.elcinema.com/uploads/_315x420_d9a0eca8ec743b755ce30ea744ba2f20e24b8c6400a5f6559cbf35f0b709ede2.jpg",
    releaseDate: new Date(2019, 2, 3),
    starring: "Regina Hall",
    video: "",
    views: 34000,
  },
  {
    title: "Acrimony",
    trailer: "wlpunOUxYSo",
    duration: "2h39",
    genre: "Romance",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzk0MzYxMzc2MV5BMl5BanBnXkFtZTgwNzU5OTc4NDM@._V1_.jpg",
    releaseDate: new Date(2018, 2, 3),
    starring: "Taraji P. Henson",
    video: "",
    views: 34000,
  },
  {
    title: "Think Like A Man",
    trailer: "vxTN4eX4Vss",
    duration: "2h39",
    genre: "Comedy",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/55/Think_Like_a_Man_Too_poster.jpg",
    releaseDate: new Date(2018, 2, 3),
    starring: "Taraji P. Henson",
    video: "",
    views: 34000,
  },
  {
    title: "I'm In Love With A Church Girl",
    trailer: "bnULsIsuwDY",
    duration: "1h58",
    genre: "Romance",
    image:
      "https://www.directv.com/db_photos/movies/AllPhotosAPGI/10217303/10217303_aa.jpg",
    releaseDate: new Date(2013, 2, 3),
    starring: "Adrienne Bailon",
    video: "",
    views: 34000,
  },
  {
    title: "Sisu",
    trailer: "d2k4QAItiSA",
    duration: "2h39",
    genre: "Action",
    image: "https://i.ytimg.com/vi/d2uFxb87Xik/movieposter_en.jpg",
    releaseDate: new Date(2023, 4, 3),
    starring: "Jorma Tommila",
    video: "",
    views: 34000,
  },
];

const TrailerPage = () => {
  // <YouTube videoId={movieTrailers[4].trailer} opts={opts} />

  const [selectedMovieTrailer, setSelectedMovieTrailer] = useState<
    movieProps | undefined
  >(undefined);

  // Methods
  const setMovieTrailerSelected = (movie: movieProps) => {
    setSelectedMovieTrailer(movie);
  };

  const sortedMovies = movies.sort(
    (a: movieProps, b: movieProps) =>
      b.releaseDate.getTime() - a.releaseDate.getTime()
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
