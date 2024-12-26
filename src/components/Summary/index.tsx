import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './styles';
import { princeFormatter } from '../../utils/formatter';
import { useSumary } from '../../hooks/useSummary';

export function Summary() {
  const summary = useSumary();

  const formatDate = (date: Date | null) => {
    if (!date) return 'N/A';
    return `em ${new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
    }).format(date)}`;
  };

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{princeFormatter.format(summary.income)}</strong>
        <small>Última entrada {formatDate(summary.lastIncome)}</small>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{princeFormatter.format(summary.outcome)}</strong>
        <small>Última saída {formatDate(summary.lastOutcome)}</small>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{princeFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
