import styled from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;

    @media(max-width: 1024px){
        overflow-x:scroll;
        white-space: nowrap;
    }
`

interface SummaryCardProps{
    variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme["gray-600"] };
    border-radius: 6px;
    padding: 2rem;

    small{
        color: #7C7C8A;
        margin-top: 1rem;
        line-height: 1.6;
        font-size: 14px;
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme["gray-300"] };
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && `
        background: ${props.theme["green-700"]};

    `}
`