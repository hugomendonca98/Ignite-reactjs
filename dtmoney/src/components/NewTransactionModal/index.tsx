import Modal from "react-modal";

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
      >
          <h2>Cadastrar transação</h2>
      </Modal>
  )
}
