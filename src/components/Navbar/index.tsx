import { Container, Content, VerticalSeparator } from './styles';
import Image from 'next/image';

import logoEnsinio from '../../assets/logo.svg';
import downTriangle from '../../assets/icons/main-section/dropdownpolygon.svg'
import userProfile from '../../assets/icons/main-section/userprofile.svg'
import SecondaryButton from '../SecondaryButton';
import TertiaryButton from '../TertiaryButton';
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';

export default function Navbar() {
    const { 
        langPack,
    } = useContext(LanguageContext)

    return (
      <Container>
            <Content>
                <a href="#"><Image src={logoEnsinio} alt="" /></a>
                <section>
                    <a href="#">{langPack.solutions}<Image src={downTriangle} alt="" /></a>
                    <a href="#">{langPack.prices}</a>
                    <a href="#">{langPack.academy}</a>
                    <a href="#">{langPack.blog}</a>
                    <a href="#">{langPack.contact}</a>

                    <VerticalSeparator />

                    <SecondaryButton>
                        <Image src={userProfile} alt="" />
                        {langPack.enter}
                    </SecondaryButton>
                    <TertiaryButton>{langPack.startNow}</TertiaryButton>
                    
                    <a href="#">PT<Image src={downTriangle} alt="" /></a>
                    {/* <ul className="dropdownLanguageSubmenu">
                        <li><a href="#">PT</a></li>
                        <li><a href="#">EN</a></li>
                        <li><a href="#">ES</a></li>
                    </ul> */}
                </section>
            </Content>
      </Container>
    )
}