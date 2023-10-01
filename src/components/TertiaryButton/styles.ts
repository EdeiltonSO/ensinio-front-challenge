import { styled } from 'styled-components'

export const Container = styled.button`
    background: transparent;
    padding: 12px 24px;
    border: 1px solid rgba(255,255,255,0.5);
    color: ${(props) => props.theme['white']};
    transition: 0.2s;
    border-radius: 80px;
    font-weight: 600;
    font-size: 15px;
    line-height: 15.75px;
    cursor: pointer;

    &:hover {
        opacity: 75%;
    }
`;