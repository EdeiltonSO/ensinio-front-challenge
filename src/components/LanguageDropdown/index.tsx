import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { NavContainer } from './styles';
import Image from 'next/image';

import downTriangle from '../../assets/icons/main-section/dropdownpolygon.svg'
import ptBRFlag from '../../assets/icons/languages/pt-br.svg'
import enUSFlag from '../../assets/icons/languages/en.svg'
import esFlag from '../../assets/icons/languages/es.svg'


export default function LanguageDropdown() {
    const { 
        language,
        setCurrentLanguage
    } = useContext(LanguageContext)

    return (
        <NavContainer>
            <ul className='dropdownTitle'>
                <li>
                    <a>{language.substring(0, 2).toUpperCase()}<Image src={downTriangle} alt="" /></a>
                    <ul className='dropdownOptions'>
                        <li>
                            <a onClick={() => setCurrentLanguage('pt-BR')}>
                                <Image width={16} height={16} src={ptBRFlag} alt="" />
                                PT
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setCurrentLanguage('en-US')}>
                                <Image width={16} height={16} src={enUSFlag} alt="" />
                                EN
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setCurrentLanguage('es')}>
                                <Image width={16} height={16} src={esFlag} alt="" />
                                ES
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </NavContainer>
    )
}