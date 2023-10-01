import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 5.5rem;
    background: ${(props) => props.theme['black-transparent']};
    position: fixed;
    backdrop-filter: blur(15px);
    z-index: 1;
`;

export const Content = styled.div`
    max-width: 76rem;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme['white']};

    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
        display: flex;
        gap: 2.5rem;

        a {
            display: flex;
            align-items: center;
            color: ${(props) => props.theme['white']};
            text-decoration: none;
            gap: 8px;
            font-weight: 500;
            font-size: 15px;
            line-height: 15.75px;
            transition: 0.2s;

            &:hover {
                opacity: 75%;
            }
        }
    }
`;

export const VerticalSeparator = styled.div`
    margin: 0 48px;
    width: 1px;
    height: 24px;
    background: ${(props) => props.theme['teal-light']};
    opacity: 25%;
`;