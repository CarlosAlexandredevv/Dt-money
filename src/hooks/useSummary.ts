import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSumary(){
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

    const summary = useMemo(() => {
        const lastIncomeTransaction = transactions.find(transaction => transaction.type === 'income');
        const lastOutcomeTransaction = transactions.find(transaction => transaction.type === 'outcome');

        return transactions.reduce(
            (acc, transaction) => {
                if (transaction.type === 'income') {
                    acc.income += transaction.price
                    acc.total += transaction.price
                } else {
                    acc.outcome += transaction.price
                    acc.total -= transaction.price
                }

                return acc
            },
            {
                income: 0,
                outcome: 0,
                total: 0,
                lastIncome: lastIncomeTransaction ? new Date(lastIncomeTransaction.createdAt) : null,
                lastOutcome: lastOutcomeTransaction ? new Date(lastOutcomeTransaction.createdAt) : null,
            },
        )
    }, [transactions])

    return summary
}