import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const opts = {
  height: "360",
  width: "640",
  playerVars: {
    // Add any additional parameters as needed (e.g., autoplay, controls)
  },
};

const movieTrailers = [
  { name: "Kate", trailerId: "MysGjRS9jFU" },
  { name: "Fast X", trailerId: "aOb15GVFZxU" },
  { name: "Wrath of man", trailerId: "my4eXuV0MbI" },
  { name: "Bloodshot", trailerId: "3puiKNZf73o" },
  { name: "The Mother", trailerId: "8BFdFeOS3oM&t=16s" },
  { name: "Megan", trailerId: "BRb4U99OU80" },
];

const Admin = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  const topVideoStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px', // Set a desired height
    marginBottom: '32px',
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
    backgroundColor: theme === 'light' ? 'purple' : 'darkpurple',
    padding: '16px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '16px',
  };

  const toggleSwitchStyle = {
    width: '40px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: theme === 'light' ? 'gray' : 'black',
   // position: 'relative',
    cursor: 'pointer',
  };

  const toggleButtonStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'white',
    //position: 'absolute',
    top: '2px',
    left: theme === 'light' ? '2px' : '22px',
    transition: 'left 0.2s ease-in-out',
  };

  return (
    <div>

      <nav style={navStyle}>
        <div style={toggleSwitchStyle} onClick={toggleTheme}>
          <div style={toggleButtonStyle}></div>
        </div>
      </nav>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/rating" style={linkStyle}>Rating</a>
        <a href="/favorite" style={linkStyle}>Favorite</a>
      </div>
      <div style={toggleSwitchStyle} onClick={toggleTheme}>
        <div style={toggleButtonStyle}></div>
      </div>
    
    {/* Rest of the component */}
  

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
