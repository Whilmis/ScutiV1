import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importamos los archivos JSON directamente
import global_en from './locales/en/global.json';
import global_es from './locales/es/global.json';

i18n
  // Detectar idioma del usuario (navegador)
  .use(LanguageDetector)
  // Pasar la instancia a react-i18next
  .use(initReactI18next)
  // Inicializar
  .init({
    interpolation: { escapeValue: false }, // React ya protege contra XSS
    fallbackLng: 'en', // Si no detecta idioma, usa Inglés por defecto
    resources: {
      en: {
        translation: global_en // 'translation' es el namespace por defecto
      },
      es: {
        translation: global_es
      }
    }
  });

export default i18n;