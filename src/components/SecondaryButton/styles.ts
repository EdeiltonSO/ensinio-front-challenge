import { styled } from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme['white']};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    cursor: pointer;
    transition: 0.2s;
    gap: 0.5rem;

    &:hover {
        opacity: 75%;
    }
`;