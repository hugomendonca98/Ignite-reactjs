import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    type: "deposit" | "withdraw";
    category: string;
    amount: number;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

type TrasactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextValue {
    transactions: Transaction[];
    createTransaction: (transaction: TrasactionInput)=> Promise<void>;
}

const TransactionsContext = createContext<TransactionContextValue>({} as TransactionContextValue);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get(`/transactions`)
            .then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TrasactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;
        
        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}
