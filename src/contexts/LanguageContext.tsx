import { createContext } from 'react';

interface LanguageContextType {
    langPack: any;
    language: string;
    setCurrentLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);