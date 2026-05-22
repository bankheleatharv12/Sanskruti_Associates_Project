import { BrowserRouter, useLocation, useNavigate } from 'react-router';

export type PageType =
  | 'homepage'
  | 'login'
  | 'loan-application'
  | 'emi-calculator'
  | 'user-dashboard'
  | 'admin-dashboard'
  | 'leads-management'
  | 'lead-details'
  | 'about'
  | 'contact'
  | 'design-system'
  | 'site-map'
  | 'loan-status-tracking'
  | 'hospital-loan'
  | 'industry-finance';

const pageToPath: Record<PageType, string> = {
  homepage: '/',
  login: '/login',
  'loan-application': '/loan-application',
  'emi-calculator': '/emi-calculator',
  'user-dashboard': '/dashboard',
  'admin-dashboard': '/admin',
  'leads-management': '/admin/leads',
  'lead-details': '/admin/leads/details',
  about: '/about',
  contact: '/contact',
  'design-system': '/design-system',
  'site-map': '/site-map',
  'loan-status-tracking': '/loan-status-tracking',
  'hospital-loan': '/hospital-loan',
  'industry-finance': '/industry-finance',
};

const pathToPage: Record<string, PageType> = Object.entries(pageToPath).reduce(
  (acc, [page, path]) => ({ ...acc, [path]: page as PageType }),
  {} as Record<string, PageType>,
);

interface NavigationContextType {
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
  scrollToSection: (sectionId: string) => void;
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export function useNavigation(): NavigationContextType {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = pathToPage[location.pathname] ?? 'homepage';

  const navigateTo = (page: PageType) => {
    navigate(pageToPath[page]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    window.setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return { currentPage, navigateTo, scrollToSection };
}
