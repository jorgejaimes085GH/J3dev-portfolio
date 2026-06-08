export interface NavigationItem {
  label: string;
  path: string;
}

export const MAIN_NAVIGATION: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'How I Add Value', path: '/why-hire-me' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Journey', path: '/journey' },
  { label: 'Education', path: '/education' },
  { label: 'Documents', path: '/documents' },
  { label: 'Contact', path: '/contact' },
];
