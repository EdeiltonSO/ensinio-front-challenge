import { styled } from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    max-height: 43.75rem;
    height: 100vh;
    color: ${(props) => props.theme['white']};
    background: linear-gradient(90deg, ${(props) => props.theme['purple-pure']} 0%, ${(props) => props.theme['teal-pure']} 100%);

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
    margin: 0 auto;
    padding-top: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 58px;

    .text {
        max-width: 100%;
        height: fit-content;
        
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

export const DetailsContainer = styled.div`
    width: 100vw;
    height: fit-content;
`;

export const DetailsContent = styled.main`
    max-width: 76rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 70px 0;

    display: flex;
    flex-direction: column;
    
    .twoTextsContainer {
        width: 100%;
        height: fit-content;
        margin-top: 27px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding-top: 10px;

            hr {
                width: 40px;
                border: 1px solid rgba(95, 65, 217, 0.5);
            }

            span {
                width: 100%;
                font-weight: 600;
                letter-spacing: 2px;
                font-size: 1rem;
                line-height: 16.8px;
                text-transform: uppercase;
                color: ${(props) => props.theme['purple-dark']};
            }
        }

        a {
            text-decoration: none;
            font-size: 1rem;
            line-height: 1.5rem;
            color: ${(props) => props.theme['neutral-200']};
            transition: 0.2s;

            &:hover {
                opacity: 75%;
            }
        }
    }

    h2 {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: -1.2px;
        color: ${(props) => props.theme['neutral-100']};
    }

    section {
        margin-top: 67px;
        display: flex;
        justify-content: space-between;
        
        article {
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
        }
    }

    footer {
        margin-top: 67px;
        border-top: 1px solid ${(props) => props.theme['neutral-900']};
        padding: 36px 0;

        display: flex;
        justify-content: space-between;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 2rem;

            span {
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.5rem;
                color: ${(props) => props.theme['neutral-200']};
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            
            a {
                font-weight: 600;
                font-size: 1rem;
                line-height: 20px;
                text-decoration: none;
                color: ${(props) => props.theme['purple-pure']};
                transition: 0.2s;
                
                display: flex;
                align-items: center;
                gap: 2rem;

                &:hover {
                    opacity: 75%;
                }
            }
        }
    }
`;