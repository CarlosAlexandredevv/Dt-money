import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, princeFormatter } from '../../utils/formatter';
import { useContextSelector } from 'use-context-selector';
import { useEffect, useState } from 'react';
import { CalendarBlank, TagSimple } from 'phosphor-react';

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer
        style={{ display: windowWidth > 767 ? 'block' : 'none' }}
      >
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {princeFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      <TransactionsContainer
        style={{ display: windowWidth > 767 ? 'none' : 'block' }}
      >
        <div
          style={{
            marginBottom: '1rem',
            marginTop: '-1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              color: '#C4C4CC',
              fontWeight: '400',
              lineHeight: '1.6',
              fontSize: '1.125rem',
            }}
          >
            Transações
          </span>
          <div
            style={{
              display: 'flex',
              gap: '0.3rem',
              color: '#7C7C8A',
              fontWeight: '400',
              lineHeight: '1.6',
            }}
          >
            <span>{transactions.length}</span>
            <span>itens</span>
          </div>
        </div>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <div className="card">
                  <tr key={transaction.id}>
                    <div className="description">
                      <h2>{transaction.description}</h2>
                      <p>
                        <PriceHighlight variant={transaction.type}>
                          {transaction.type === 'outcome' && '- '}
                          {princeFormatter.format(transaction.price)}
                        </PriceHighlight>
                      </p>
                    </div>

                    <div className="dateVenda">
                      <td
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <TagSimple />
                        {transaction.category}
                      </td>
                      <td
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <CalendarBlank />
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </td>
                    </div>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
