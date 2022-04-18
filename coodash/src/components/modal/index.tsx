import { useState, useMemo } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import styles from "./styles.module.scss";

export function PacienteFicha({
  pacienteUrl,
  modalopen,
  closeModal,
  paciente,
}: any) {
  const { onClose } = useDisclosure();
  const [urlPaciente, setUrlPaciente] = useState("qualquer coisa");

  const memoizedValue = useMemo(() => paciente, [paciente]); // como o use memo funciona
  console.log(memoizedValue);

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={modalopen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ficha do paciente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{pacienteUrl ? pacienteUrl : "dados"}</ModalBody>

          <ModalFooter>
            <Button
              width="100%"
              className={styles.button}
              colorScheme="red"
              onClick={() => closeModal(false)}
            >
              Fechar ficha
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
