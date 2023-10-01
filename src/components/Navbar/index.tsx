import { Container, Content, VerticalSeparator } from './styles';
import Image from 'next/image';

import logoEnsinio from '../../assets/logo.svg';
import downTriangle from '../../assets/icons/main-section/dropdownpolygon.svg'
import userProfile from '../../assets/icons/main-section/userprofile.svg'
import SecondaryButton from '../SecondaryButton';
import TertiaryButton from '../TertiaryButton';

export default function Navbar() {
    return (
      <Container>
            <Content>
                <a href="#"><Image src={logoEnsinio} alt="" /></a>
                <section>
                    <a href="#">Soluções<Image src={downTriangle} alt="" /></a>
                    <a href="#">Preços</a>
                    <a href="#">Academy</a>
                    <a href="#">Blog</a>
                    <a href="#">Contato</a>

                    <VerticalSeparator />

                    <SecondaryButton>
                        <Image src={userProfile} alt="" />
                        Entrar
                    </SecondaryButton>
                    <TertiaryButton>Começar agora</TertiaryButton>
                    
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