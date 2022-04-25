import { Header } from "../../components/header/index";
import { Content } from "../../components/Content/index";
import { Button } from "../../components/button";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Context from "../../Context/users/index";

const Post = () => {
  const router = useRouter();
  const { paciente } = router.query;
  const { setPacienteObject } = useContext(Context);

  useEffect(() => {
    if (paciente != undefined) {
      const pacineteObject = {
        paciente: paciente[0],
        position: paciente[1],
      };
      setPacienteObject(pacineteObject);
    }
  }, [paciente]);

  return (
    <div>
      <Header />
      <Content />
      <Button />
    </div>
  );
};

export default Post;
