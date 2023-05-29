import React, { useState } from 'react';
import styled from 'styled-components';

import router from 'next/router';
import { useMovie } from '../../../providers/movies';
import { movieProps } from '../../interfaces/movie';

const RateMoviePopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;
const RateMovieTitle = styled.h3`
  margin-bottom: 10px;
`;
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const RatingLabel = styled.span`
  margin-right: 10px;
`;
const RatingStars = styled.div`
  display: flex;
  align-items: center;
`;
const StarIcon = styled.span`
  cursor: pointer;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;
const RateMovieButton = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
interface RateMovieComponentProps {
  onClose: () => void;
}
export const RateMovieComponent: React.FC<RateMovieComponentProps> = ({ onClose }) => {
  const {id} =router.query;
  const { moviesFetched, rateMovie}=useMovie();
  const [rating, setRating] = useState(0);
  const movie =moviesFetched.find((movie)=>movie.id === id);
  const handleStarClick = (starRating) => {
    setRating(starRating);
  };
  const handleRateMovie = (RATE: number) => {
    // Handle rate movie button click
    const x : movieProps= {
      id: movie.id,
      title: '',
      duration: '',
      trailer:'',
      view:'',
      releaseDate:'',
      starring: '',
      genre: '',
      image: '' ,
      video: '',
      rating: RATE,
 
  
    }
  rateMovie(x);
  console.log(`${movie.id} rated:::`, RATE)
    console.log('Rating:', rating);
  };
  return (
    <RateMoviePopup>
      <CloseButton onClick={onClose}>x</CloseButton>
      <RateMovieTitle>Rate Movie</RateMovieTitle>
      <RatingContainer>
        <RatingLabel>Rating:</RatingLabel>
        <RatingStars>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              onClick={() => handleStarClick(star)}
              style={{ color: star <= rating ? '#F1C40F' : '#ccc' }}
            >
              ★
            </StarIcon>
          ))}
        </RatingStars>
      </RatingContainer>
      <RateMovieButton onClick={()=>handleRateMovie(rating)}>Rate</RateMovieButton>
    </RateMoviePopup>
  );
};
