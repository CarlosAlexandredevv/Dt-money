import { ReactNode, useState, useCallback } from 'react';
import { api } from '../lib/axios';
import { createContext } from 'use-context-selector';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (
    page?: number,
    limit?: number,
    query?: string,
  ) => Promise<{ total: number }>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(
    async (page = 1, limit = 10, query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _page: page,
          _limit: limit,
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      });
      setTransactions(response.data);
      return { total: parseInt(response.headers['x-total-count'], 10) };
    },
    [],
  );

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data;

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      });
      setTransactions((state) => [response.data, ...state]);
      fetchTransactions(); // Atualiza a lista de transações após adicionar um novo item
    },
    [fetchTransactions],
  );

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
