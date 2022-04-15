import type { NextPage } from "next";
import Post from "./paciente/[paciente]";

const Home: NextPage = () => {
  return (
    <div>
      <Post />
    </div>
  );
};

export default Home;
