import type { UiNavTextKey } from '../../data/ui-text.data';

export interface NavigationItem {
  labelKey: UiNavTextKey;
  label: string;
  path: string;
  iconUrl?: string;
  premiumIcon?: string;
  iconFallback: string;
  children?: NavigationItem[];
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    labelKey: 'home',
    label: 'Home',
    path: '/',
    iconUrl: 'assets/images/icons/navigation/home.svg',
    iconFallback: 'H',
  },
  {
    labelKey: 'about',
    label: 'About',
    path: '/about',
    iconUrl: 'assets/images/icons/navigation/about.svg',
    iconFallback: 'A',
    children: [
      {
        labelKey: 'profile',
        label: 'Profile',
        path: '/about',
        iconUrl: 'assets/images/icons/navigation/about.svg',
        iconFallback: 'P',
      },
      {
        labelKey: 'value',
        label: 'How I Add Value',
        path: '/why-hire-me',
        iconUrl: 'assets/images/icons/navigation/value.svg',
        iconFallback: 'V',
      },
    ],
  },
  {
    labelKey: 'skills',
    label: 'Skills',
    path: '/skills',
    iconUrl: 'assets/images/icons/navigation/skills.svg',
    iconFallback: 'S',
  },
  {
    labelKey: 'projects',
    label: 'Projects',
    path: '/projects',
    iconUrl: 'assets/images/icons/navigation/projects.svg',
    iconFallback: 'P',
  },
  {
    labelKey: 'experience',
    label: 'Experience',
    path: '/experience',
    iconUrl: 'assets/images/icons/navigation/experience.svg',
    iconFallback: 'X',
  },
  {
    labelKey: 'journey',
    label: 'Journey',
    path: '/journey',
    iconUrl: 'assets/images/icons/navigation/journey.svg',
    iconFallback: 'J',
  },
  {
    labelKey: 'education',
    label: 'Education',
    path: '/education',
    iconUrl: 'assets/images/icons/navigation/education.svg',
    iconFallback: 'E',
  },
  {
    labelKey: 'documents',
    label: 'Documents',
    path: '/documents',
    iconUrl: 'assets/images/icons/navigation/documents.svg',
    iconFallback: 'D',
  },
  {
    labelKey: 'contact',
    label: 'Contact',
    path: '/contact',
    iconUrl: 'assets/images/icons/navigation/contact.svg',
    iconFallback: 'C',
  },
];
