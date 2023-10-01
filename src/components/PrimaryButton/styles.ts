import { styled } from 'styled-components'

export const Container = styled.button`
    padding: 18px 32px;
    border: none;
    border-radius: 80px;
    background-color: ${(props) => props.theme['teal-pure']};
    color: ${(props) => props.theme['neutral-100']};
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${(props) => props.theme['teal-light']};
    }
`;