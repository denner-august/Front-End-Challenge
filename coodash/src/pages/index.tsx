import type { NextPage } from "next";
import { Header } from "../components/header/index";
import { Content } from "../components/Content/index";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Home;
