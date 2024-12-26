import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  .card {
    display: flex;
    padding: 1.5rem 2rem;
    width: 100%;
    flex-direction: column;
    background: ${(props) => props.theme['gray-700']};
    margin-top: 1rem;
    border-radius: 6px;
  }

  .description{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }

  span{
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.6;
  }
  
  h2{
    color: #C4C4CC;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  

  .dateVenda {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #7C7C8A;
  }

  @media (min-width: 768px) {
    tr td {
      padding: 1.25rem 2rem;
      background: ${(props) => props.theme['gray-700']};
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }


  
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`