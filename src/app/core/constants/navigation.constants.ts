export interface NavigationItem {
  label: string;
  path: string;
  iconUrl?: string;
  iconFallback: string;
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
    iconUrl: 'assets/images/icons/navigation/home.svg',
    iconFallback: 'H',
  },
  {
    label: 'About',
    path: '/about',
    iconUrl: 'assets/images/icons/navigation/about.svg',
    iconFallback: 'A',
  },
  {
    label: 'How I Add Value',
    path: '/why-hire-me',
    iconUrl: 'assets/images/icons/navigation/value.svg',
    iconFallback: 'V',
  },
  {
    label: 'Skills',
    path: '/skills',
    iconUrl: 'assets/images/icons/navigation/skills.svg',
    iconFallback: 'S',
  },
  {
    label: 'Projects',
    path: '/projects',
    iconUrl: 'assets/images/icons/navigation/projects.svg',
    iconFallback: 'P',
  },
  {
    label: 'Journey',
    path: '/journey',
    iconUrl: 'assets/images/icons/navigation/journey.svg',
    iconFallback: 'J',
  },
  {
    label: 'Education',
    path: '/education',
    iconUrl: 'assets/images/icons/navigation/education.svg',
    iconFallback: 'E',
  },
  {
    label: 'Documents',
    path: '/documents',
    iconUrl: 'assets/images/icons/navigation/documents.svg',
    iconFallback: 'D',
  },
  {
    label: 'Contact',
    path: '/contact',
    iconUrl: 'assets/images/icons/navigation/contact.svg',
    iconFallback: 'C',
  },
];
