import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { RestfulProvider } from "restful-react";
import TrailerPage from "./trailer";
import AuthenticationPage from "./authentication";
import { RateMovieComponent } from "./components/movieRating/movieRating";

const HomePage: React.FC = () => {
  return (
    <>
      <AuthenticationPage />
    </>
  );
};

export default HomePage;
