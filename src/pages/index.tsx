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
import { useContext, useEffect, useState } from "react";
import ArticleBox from "@/components/ArticleBox";
import { LanguageContext } from "@/contexts/LanguageContext";

interface Polyglot {
  pt: string;
  en: string;
  es: string;
}

interface ArticleData {
  id: number;
  title: Polyglot;
  description: Polyglot;
}

export default function Home() {
  const [items, setItems] = useState<ArticleData[]>([]);

  const { 
    langPack,
    language,
    setCurrentLanguage
  } = useContext(LanguageContext)
  
  async function loadItems() {
    const response = await fetch('http://localhost:3333/items');
    const data = await response.json();
    setItems(data);
  }
  
  useEffect(() => {
    loadItems();
    setCurrentLanguage('en-US'); // mover pra botão na navbar
  }, [])

  return (
    <>
      <Head>
        <title>{langPack.titlePage}</title>
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
              <span>{langPack.platformAIO}</span>
            </span>
            <h1>{langPack.h1Main}</h1>
            <p>{langPack.descriptionMain}</p>
            <div>
              <PrimaryButton>{langPack.CTAButton}</PrimaryButton>
              <SecondaryButton>
                <Image src={play} width={32} height={32} alt="" />
                {langPack.watchVideo}
              </SecondaryButton>
            </div>
          </section>
          <section className="persona">
            <Image src={personaBackground} width={658} height={483} alt="" />
            <Image className="personaImage" src={persona} width={529} height={533} alt={langPack.descriptionPersona} />
          </section>
        </MainContent>
      </MainContainer>
  
      <DetailsContainer>
        <DetailsContent>
          <div className="twoTextsContainer">
            <div>
              <hr />
              <span>{langPack.detailsSpan}</span>
            </div>
            <a href="#">{langPack.detailsAnchor} ⚡️</a>
          </div>

          <h2>{langPack.detailsH2}</h2>
          <section>
            {items.map(item => {
              let icon;
              switch (item.id) {
                case 1:
                  icon = iconTracks;
                  break;
                case 2:
                  icon = iconPlaylists;
                  break;
                case 3:
                  icon = iconFolder;
                  break;
                default:
                  icon = '';
                  break;
              }

              let title, description;
              switch (language) {
                case 'pt-BR':
                  title = item.title.pt;
                  description = item.description.pt;
                  break;
                case 'en-US':
                  title = item.title.en;
                  description = item.description.en;
                  break;
                case 'es':
                  title = item.title.es;
                  description = item.description.es;
                  break;
                default:
                  title = '';
                  description = '';
                  break;
              }

              return (
                <ArticleBox
                  key={item.id}
                  iconSrc={icon} 
                  title={title}
                  description={description}
                />
              )
            })}
          </section>
          <footer>
            <div className="leftSide">
              <Image src={rocket} width={32} height={32} alt="" />
              <span>{langPack.footerSpan}</span>
            </div>
            <div className="rightSide">
              <a href="#">
              {langPack.footerAnchor}
                <Image src={rightArrow} width={32} height={24} alt="" />
              </a>
            </div>
          </footer>
        </DetailsContent>
      </DetailsContainer>
    </>
  )
}
