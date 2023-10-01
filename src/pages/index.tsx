import { DetailsContainer, DetailsContent, MainContainer, MainContent } from "@/styles";
import Image from 'next/image';
import Head from 'next/head';

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

import iconTracks from '../assets/icons/second-section/icon-tracks.svg'
import iconPlaylists from '../assets/icons/second-section/icon-playlists.svg'
import iconFolder from '../assets/icons/second-section/icon-folder.svg'
import rocket from '../assets/icons/second-section/rocket.svg'
import rightArrow from '../assets/icons/second-section/right-arrow.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ensinio | Página Inicial</title>
      </Head>

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
        <DetailsContent>
          <div className="twoTextsContainer">
            <div>
              <hr />
              <span>pensamos em cada detalhe</span>
            </div>
            <a href="#">Conheça alguns dos nossos recursos ⚡️</a>
          </div>

          <h2>Queremos que o aluno se sinta confortável enquanto aprende</h2>
          <section>
            <article>
              <Image src={iconTracks} width={40} height={40} alt="" />
              <strong>Trilhas de etapas</strong>
              <p>Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.</p>
            </article>
            <article>
              <Image src={iconPlaylists} width={40} height={40} alt="" />
              <strong>Playlists</strong>
              <p>Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência offline.</p>
            </article>
            <article>
              <Image src={iconFolder} width={40} height={40} alt="" />
              <strong>Coleções</strong>
              <p>Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência.</p>
            </article>
          </section>
          <footer>
            <div className="leftSide">
              <Image src={rocket} width={32} height={32} alt="" />
              <span>Veja todos os outros recursos disponíveis para te ajudar</span>
            </div>
            <div className="rightSide">
              <a href="#">
                Ver mais
                <Image src={rightArrow} width={32} height={24} alt="" />
              </a>
            </div>
          </footer>
        </DetailsContent>
      </DetailsContainer>
    </>
  )
}
