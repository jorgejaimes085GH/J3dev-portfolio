export const UI_TEXT = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      value: 'How I Add Value',
      skills: 'Skills',
      projects: 'Projects',
      journey: 'Journey',
      education: 'Education',
      documents: 'Documents',
      contact: 'Contact',
    },
    header: {
      theme: 'Theme',
      preview: 'Preview',
      pin: 'Pin header',
      unpin: 'Unpin header',
      language: 'Language',
      english: 'English',
      spanish: 'Spanish',
    },
    common: {
      previous: 'Previous',
      next: 'Next',
    },
    footer: {
      copyright: 'Copyright information pending final publication.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      value: 'Cómo aporto valor',
      skills: 'Habilidades',
      projects: 'Proyectos',
      journey: 'Trayectoria',
      education: 'Educación',
      documents: 'Documentos',
      contact: 'Contacto',
    },
    header: {
      theme: 'Tema',
      preview: 'Vista',
      pin: 'Fijar encabezado',
      unpin: 'Liberar encabezado',
      language: 'Idioma',
      english: 'Inglés',
      spanish: 'Español',
    },
    common: {
      previous: 'Anterior',
      next: 'Siguiente',
    },
    footer: {
      copyright: 'Información de derechos de autor pendiente de publicación final.',
    },
  },
} as const;

export type UiText = (typeof UI_TEXT)['en'];
export type UiNavTextKey = keyof UiText['nav'];
