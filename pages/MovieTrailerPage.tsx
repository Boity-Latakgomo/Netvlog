// import React from 'react';
// import { GetServerSideProps } from 'next';
// import MovieTrailer from '../pages/components/MovieTrailor';

// interface MovieTrailerPageProps {
//   videoId: string;
// }

// const MovieTrailerPage: React.FC<MovieTrailerPageProps> = ({ videoId }) => {
//   return (
//     <div>
//       <h1>Movie Trailer</h1>
//       <MovieTrailer />
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps<MovieTrailerPageProps> = async () => {
//   // Fetch the movie trailer data from the API
//   const response = await fetch('https://localhost:44311/api/services/app/Movie/GetAll');
//   const data = await response.json();

//   return {
//     props: {
//       videoId: data.videoId,
//     },
//   };
// };

// export default MovieTrailerPage;