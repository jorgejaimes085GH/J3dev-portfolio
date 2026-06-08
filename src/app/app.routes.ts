import { Routes } from '@angular/router';

import { MainLayout } from './layout/main-layout/main-layout';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Documents } from './pages/documents/documents';
import { Education } from './pages/education/education';
import { Home } from './pages/home/home';
import { Journey } from './pages/journey/journey';
import { ProjectDetailPage } from './pages/projects/project-detail-page/project-detail-page';
import { ProjectsPage } from './pages/projects/projects-page/projects-page';
import { Skills } from './pages/skills/skills';
import { WhyHireMe } from './pages/why-hire-me/why-hire-me';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home, title: 'Home | J3dev Portfolio' },
      { path: 'about', component: About, title: 'About | J3dev Portfolio' },
      { path: 'why-hire-me', component: WhyHireMe, title: 'Why Hire Me | J3dev Portfolio' },
      { path: 'skills', component: Skills, title: 'Skills | J3dev Portfolio' },
      { path: 'projects', component: ProjectsPage, title: 'Projects | J3dev Portfolio' },
      {
        path: 'projects/:projectId',
        component: ProjectDetailPage,
        title: 'Project Detail | J3dev Portfolio',
      },
      { path: 'journey', component: Journey, title: 'Journey | J3dev Portfolio' },
      { path: 'education', component: Education, title: 'Education | J3dev Portfolio' },
      { path: 'documents', component: Documents, title: 'Documents | J3dev Portfolio' },
      { path: 'contact', component: Contact, title: 'Contact | J3dev Portfolio' },
    ],
  },
  { path: '**', redirectTo: '' },
];
