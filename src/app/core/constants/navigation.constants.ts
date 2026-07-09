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
    premiumIcon: 'assets/images/icons/navigation/premium/home-premium-72.webp',
    iconFallback: 'H',
  },
  {
    labelKey: 'about',
    label: 'About',
    path: '/about',
    iconUrl: 'assets/images/icons/navigation/about.svg',
    premiumIcon: 'assets/images/icons/navigation/premium/about-premium-72.webp',
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
    premiumIcon: 'assets/images/icons/navigation/premium/skills-premium-72.webp',
    iconFallback: 'S',
  },
  {
    labelKey: 'projects',
    label: 'Projects',
    path: '/projects',
    iconUrl: 'assets/images/icons/navigation/projects.svg',
    premiumIcon: 'assets/images/icons/navigation/premium/projects-premium-72.webp',
    iconFallback: 'P',
  },
  {
    labelKey: 'experience',
    label: 'Experience',
    path: '/experience',
    iconUrl: 'assets/images/icons/navigation/experience.svg',
    premiumIcon: 'assets/images/icons/navigation/premium/experience-premium-72.webp',
    iconFallback: 'X',
  },
  {
    labelKey: 'journey',
    label: 'Journey',
    path: '/journey',
    iconUrl: 'assets/images/icons/navigation/journey.svg',
    premiumIcon: 'assets/images/icons/navigation/premium/journey-premium-72.webp',
    iconFallback: 'J',
  },
  {
    labelKey: 'education',
    label: 'Education',
    path: '/education',
    iconUrl: 'assets/images/icons/navigation/education.svg',
    premiumIcon: 'assets/images/icons/navigation/premium/education-premium-72.webp',
    iconFallback: 'E',
  },
  {
    labelKey: 'documents',
    label: 'Documents',
    path: '/documents',
    iconUrl: 'assets/images/icons/navigation/documents.svg',
    premiumIcon: 'assets/images/icons/navigation/premium/documents-premium-72.webp',
    iconFallback: 'D',
  },
  {
    labelKey: 'contact',
    label: 'Contact',
    path: '/contact',
    iconUrl: 'assets/images/icons/navigation/contact.svg',
    premiumIcon: 'assets/images/icons/navigation/premium/contact-premium-72.webp',
    iconFallback: 'C',
  },
];
