import { useState, createContext, useContext } from 'react';

type PageType =
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
  | 'school-finance'
  | 'school-finance-apply';

interface NavigationContextType {
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
  scrollToSection: (sectionId: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}

interface NavigationProviderProps {
  children: React.ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentPage, setCurrentPage] = useState<PageType>('homepage');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
}
