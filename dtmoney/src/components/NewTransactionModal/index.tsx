import Modal from "react-modal";
import { Container } from "./styles";

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    onCloseNewTransactionModal: ()=> void;
}

export const NewTransactionModal = ({isNewTransactionModalOpen, onCloseNewTransactionModal}: NewTransactionModalProps) => {
  return (
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={onCloseNewTransactionModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
        <Container>
              <h2>Cadastrar transação</h2>

              <input placeholder="Titulo" />
              <input type="number" placeholder="Valor" />
              <input placeholder="Categoria" />
              <button type="submit">Cadastrar</button>
        </Container>
          
      </Modal>
  )
}
