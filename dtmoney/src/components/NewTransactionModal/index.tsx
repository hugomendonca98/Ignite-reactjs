import { useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean;
    onCloseNewTransactionModal: ()=> void;
}

export const NewTransactionModal = ({isNewTransactionModalOpen, onCloseNewTransactionModal}: NewTransactionModalProps) => {

    const [type, setType] = useState('deposit');

  return (
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={onCloseNewTransactionModal}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
        <button 
            type="button" 
            onClick={onCloseNewTransactionModal} 
            className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
            <h2>Cadastrar transação</h2>

            <input placeholder="Titulo" />
            <input type="number" placeholder="Valor" />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={()=> setType('deposit')}
                    isActive={type === 'deposit'}
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                  </RadioBox>

                  <RadioBox
                      type="button"
                      onClick={() => setType('withdraw')}
                      isActive={type === 'withdraw'}
                  >
                      <img src={outcomeImg} alt="Saida" />
                      <span>Saida</span>
                  </RadioBox>
            </TransactionTypeContainer>

            <input placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
        </Container>
          
      </Modal>
  )
}
