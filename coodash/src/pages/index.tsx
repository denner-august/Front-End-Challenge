import type { NextPage } from "next";
import { Header } from "../components/header/index";
import { Content } from "../components/Content/index";
import { Button } from "../components/button";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Content />
      <Button />
    </div>
  );
};

export default Home;
