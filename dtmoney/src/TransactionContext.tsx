import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

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
    createTransaction: (transaction: TrasactionInput)=> void;
}

export const TransactionsContext = createContext<TransactionContextValue>({} as TransactionContextValue);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get(`/transactions`)
            .then(response => setTransactions(response.data.transactions));
    }, []);

    function createTransaction(transaction: TrasactionInput){
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}
