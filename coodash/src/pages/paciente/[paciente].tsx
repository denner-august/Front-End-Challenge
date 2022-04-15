import { Header } from "../../components/header/index";
import { Content } from "../../components/Content/index";
import { Button } from "../../components/button";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { paciente } = router.query;

  return (
    <div>
      <Header />
      <Content pacienteNumber={paciente} />
      <Button />
    </div>
  );
};

export default Post;
