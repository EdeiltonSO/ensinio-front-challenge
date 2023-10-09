import { styled } from 'styled-components';

export const NavContainer = styled.nav`   
    ul, li { list-style-type: none; }

    // estilização do pai

    .dropdownTitle {
        display: flex;
    }

    .dropdownTitle > li > a {
        display: flex;
        gap: 0.5rem;
        padding: 12px 0;
        min-width: 40px;
        justify-content: center;
    }

    .dropdownTitle > li > a:hover {
        opacity: 75%;
    }
    
    // estilização dos filhos

    .dropdownOptions {
        border-radius: 8px;
        overflow: hidden;
        transition: 0.6s;
        opacity: 0;
        transform: translateX(calc(-138px + 40px));

    }

    .dropdownTitle > li:hover > .dropdownOptions {
        background: ${(props) => props.theme['white']};
        opacity: 1;
    }
    
    .dropdownOptions li {
    }

    .dropdownOptions li a {
        color: ${(props) => props.theme['neutral-300']};
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: flex-start;
        padding: 14px 16px;
        width: 138px;
        height: 48px;
    }

    .dropdownOptions li:hover {
        background: linear-gradient(90deg, rgba(95,65,217,10%) 0%, rgba(95,65,217,0%) 100%);
        opacity: 1;
    }

    // comportamentos

    .dropdownOptions {
        position: absolute;
        pointer-events: none; /* evita abrir subul ao passar mouse na área onde ele vai ficar se for aberto */
    }

    li a {
        white-space: nowrap; /* impede a quebra de linha do texto */
        cursor: pointer;
        display: block;
    }

    li:hover > ul {
        pointer-events: initial; /* pra manter o subul aberto */
    }

    /* filhos sem hover no pai */
    .dropdownOptions > li {
        transition: 0.6s;
        opacity: 0;
    }

    /* filhos com hover no pai */
    li:hover > ul > li {
        opacity: 1;
    }
`;