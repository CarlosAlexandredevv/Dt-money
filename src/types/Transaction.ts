export interface Transaction {
    id: number;
    description: string;
    price: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string;
  }