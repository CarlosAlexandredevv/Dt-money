import styled from "styled-components";

export const PaginatioContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    


`

export const ButtonNumber = styled.button`
  background-color: ${(props) =>
    props.disabled ? props.theme['green-700'] : props.theme['gray-600']};
  color: ${(props) =>
    props.disabled ? props.theme['gray-100'] : props.theme['gray-400']};
  font-weight: bold;
  line-height: 1.4;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:not(:disabled):hover {
    opacity: 70%;
    transition: 0.3s;
  }
`;

export const ButtonPagination = styled.button `
        all: unset;
        color: ${props => props.theme['green-500']};
        line-height: 1.4;
        cursor: pointer; 

        &:disabled{
            color: ${props => props.theme['gray-600']};
            cursor: not-allowed;
        }
    `