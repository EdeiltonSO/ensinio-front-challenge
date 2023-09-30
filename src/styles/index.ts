import { styled } from 'styled-components'

export const Navbar = styled.div`
    width: 100vw;
    height: 5.5rem;
    color: ${(props) => props.theme['white']};
    background: rgba(0,0,0,0.03);
    position: fixed;
    backdrop-filter: blur(10px);
    z-index: 1;
`;

export const MainContainer = styled.div`
    width: 100vw;
    max-height: 43.75rem;
    height: 100vh;
    color: ${(props) => props.theme['white']};
    background: linear-gradient(90deg, ${(props) => props.theme['purple']} 0%, ${(props) => props.theme['teal']} 100%);

    .backgroundIcon {
        position: absolute;
    }

    .playlist0 {
        top: -27px;
        left: 22.22%;
    }

    .transcription {
        top: 18.06px;
        left: 67.37%;
        transform: rotate(20.07deg);
    }

    .playlist1 {
        top: 36.27px;
        left: 2.73%;
        transform: rotate(15deg);
    }

    .certified {
        top: 70.85px;
        left: 42.7%;
        transform: rotate(-21.05deg);
    }

    .playlist2 {
        top: 34.4px;
        left: 92.53%;
        transform: rotate(15deg);
    }
`;

export const MainContent = styled.main`
    max-width: 76rem;
    width: 100%;
    height: 100%;
    //background: rgba(0,0,0,0.5);
    margin: 0 auto;
    padding-top: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 58px;

    .text {
        max-width: 100%;
        height: fit-content;
        //background-color: rgba(255, 0, 0, 0.3);
        
        span {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            
            &:not(:first-child) {
                opacity: 75%;
            }
        }

        h1 {
            margin-top: 2.5rem;
            font-weight: 500;
            font-size: 2.75rem;
            line-height: 3.025rem;
        }

        p {
            width: 84%;
            margin-top: 2.75rem;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
            opacity: 90%;
        }

        div {
            display: flex;
            margin-top: 3rem;
            gap: 2.5rem;
        }
    }

    .persona {
        width: fit-content;
        height: 100%;
        //background-color: rgba(255, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: relative;
    }
    
    .personaImage {
        position: absolute;
        bottom: 0;
    }
`;

export const PrimaryButton = styled.button`
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

export const SecondaryButton = styled.button`
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

export const DetailsContainer = styled.div`
    width: 100vw;
    height: 500px;
`;