import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout'
import { RestfulProvider } from 'restful-react';
import MovieTrailor from './components/MovieTrailor';


const HomePage: React.FC = () => {
  return (
    <>
       <RestfulProvider base="https://localhost:44311/api/services/app/">
       <MovieTrailor/>
       </RestfulProvider>
</>
  )
};

export default HomePage;