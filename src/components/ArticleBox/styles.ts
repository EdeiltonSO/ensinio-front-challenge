import { styled } from 'styled-components'

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 304px;

    strong {
        margin-top: 24px;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: ${(props) => props.theme['neutral-100']};
    }

    p {
        margin-top: 12px;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${(props) => props.theme['neutral-200']};
    }
`;