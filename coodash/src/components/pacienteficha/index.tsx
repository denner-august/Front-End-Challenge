import Image from "next/image";
import styles from "./styles.module.scss";

export function DadosPaciente({ dados, numberPaciente }: any) {
  if (dados === null) {
    return <h3>link incorreto</h3>;
  }
  if (dados) {
    return (
      <div className={styles.Container}>
        <div className={styles.layoutImage}>
          <Image
            className={styles.imagemPaciente}
            quality={100}
            width={130}
            height={130}
            objectFit={"contain"}
            alt="Paciente"
            src={dados.picture.large}
          />
        </div>
        <p id={styles.identification}>
          {dados.name.title} {dados.name.first} {dados.name.last}
        </p>

        <ul>
          <li>
            <p>Email:</p>
            {dados.email}
          </li>
          <li>
            <p>Genero:</p> {dados.gender === "male" ? "Homem" : "Mulher"}
          </li>
          <li>
            <p> Data de nascimento:</p>
            {new Date(dados.dob.date).toLocaleDateString("pt-br")}
          </li>
          <li>
            <p>Telefone:</p> {dados.phone.match(/\d/g).join("")}
          </li>
          <li>
            <p>Nacionalidade:</p> {dados.nat}
          </li>
          <li>
            <p>Endereço: </p>
            {dados.location.street.name}
          </li>
          <li>
            <p>ID: </p>
            {dados.login.uuid}
          </li>
          <li>
            <p>
              Compartilhar:
              <a>
                {" "}
                {`https://front-end-challenge-coodesh-one.vercel.app/paciente/${dados.login.uuid}/${numberPaciente}`}
              </a>
            </p>
          </li>
        </ul>
      </div>
    );
  }

  return null;
}
