import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { RestfulProvider } from "restful-react";
import TrailerPage from "./trailer";

const HomePage: React.FC = () => {
  return (
    <>
      <TrailerPage />
    </>
  );
};

export default HomePage;
