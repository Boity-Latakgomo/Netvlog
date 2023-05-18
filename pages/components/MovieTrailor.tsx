import React from "react";
import YouTube from "react-youtube";
import ColorModeSwitch from './ColorModeSwitch';
import { useGet } from "restful-react";
import App from "./ColorModeSwitch";

// const MovieTrailer = () => {
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



// YouTube video options
const opts = {
  height: "360",
  width: "640",
  playerVars: {
    // Add any additional parameters as needed (e.g., autoplay, controls)
  },
};

const videoId = "UhbixyxgsiU";

const movieTrailers = [
  { name: "Kate", trailerId: "MysGjRS9jFU" },
  { name: "Fast X", trailerId: "aOb15GVFZxU" },
  { name: "Wrath of man", trailerId: "my4eXuV0MbI" },
  { name: "Bloodshot", trailerId: "3puiKNZf73o" },
  {name: "The Mother", trailerId: "8BFdFeOS3oM&t=16s"},
  {name: "Megan", trailerId: "BRb4U99OU80"},
];

const Admin = () => {

    const topVideoStyle = {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px', // Set a desired height
        marginBottom: '32px',
        //marginTop: '20px',
        
      };
    
      const remainingVideosStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '32px',
        
      };
    
      const videoStyle = {
        margin: '0 16px', // Add spacing between videos
      };

      const navStyle = {
        // backgroundColor: 'purple',
        padding: '16px',
        
      };
    
      return (
        <div>
          
          <nav style={navStyle}>
        {/* Add your navigation links here */}
        <ColorModeSwitch />
        <App />
      </nav>
        

          <p>Admin</p>
          <div style={topVideoStyle}>
            <YouTube videoId={movieTrailers[3].trailerId} opts={opts} />
          </div>
          <div style={remainingVideosStyle}>
            {movieTrailers.slice(0, 3).map((trailer, index) => (
              <div key={index} style={videoStyle}>
                <YouTube videoId={trailer.trailerId} opts={opts} />
              </div>
            ))}
          </div>
          <YouTube videoId={movieTrailers[4].trailerId} opts={opts} />
        </div>
      );
    };
    
    export default Admin;