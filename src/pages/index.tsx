import { DetailsContainer, MainContainer, MainContent } from "@/styles";
import Image from 'next/image';

import Navbar from "@/components/Navbar";
import SecondaryButton from "@/components/SecondaryButton";
import PrimaryButton from "@/components/PrimaryButton";

import personaBackground from '../assets/persona-background.svg';
import persona from '../assets/persona.png';
import devices from '../assets/icons/main-section/devices.svg';
import play from '../assets/icons/main-section/play.svg';
import playlists from '../assets/icons/main-section/playlists.svg';
import certified from '../assets/icons/main-section/certified.svg';
import transcription from '../assets/icons/main-section/transcription.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Image className="backgroundIcon playlist0" src={playlists} width={54} height={54} alt="" />
        <Image className="backgroundIcon transcription" src={transcription} width={53.95} height={53.95} alt="" />
        <Image className="backgroundIcon playlist1" src={playlists} width={82.5} height={82.5} alt="" />
        <Image className="backgroundIcon certified" src={certified} width={67.36} height={67.36} alt="" />
        <Image className="backgroundIcon playlist2" src={playlists} width={83.63} height={83.63} alt="" />
        <MainContent>
          <section className="text">
            <span>
              <Image src={devices} width={24} height={24} alt="" />
              <span>plataforma all in one</span>
            </span>
            <h1>Sua escola online poderosa e lucrativa</h1>
            <p>Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.</p>
            <div>
              <PrimaryButton>Começar agora</PrimaryButton>
              <SecondaryButton>
                <Image src={play} width={32} height={32} alt="" />
                Ver vídeo
              </SecondaryButton>
            </div>
          </section>
          <section className="persona">
            <Image src={personaBackground} width={658} height={483} alt="" />
            <Image className="personaImage" src={persona} width={529} height={533} alt="" />
          </section>
        </MainContent>
      </MainContainer>
  
      <DetailsContainer>
        
      </DetailsContainer>
    </>
  )
}
