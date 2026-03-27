import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header, Footer, GoogleAnalytics, ResourcePreloader } from '@/components';
import { YTMLogo } from '@/assets';
import AppRouter from '@/router/routes';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { useLocation } from 'react-router-dom';
import React from 'react';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <SmoothScrollProvider>
          <AppContent />
        </SmoothScrollProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

// Separate component to use useLocation
const AppContent: React.FC = () => {
  const location = useLocation();

  // Routes where we want to hide Header/Footer
  const hideLayoutRoutes = ['/equipment-finance'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  // GA & ResourcePreloader can stay here
  const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';
  const criticalImages: string[] = [];

  return (
    <>
      <GoogleAnalytics trackingId={GA_TRACKING_ID} enableDevelopmentTracking={false} />
      <ResourcePreloader criticalImages={criticalImages} enableAnalytics={import.meta.env.DEV} />

      <div className="flex flex-col min-h-screen bg-gray-50">
        {!hideLayout && (
          <Header
            logo={{
              src: YTMLogo,
              alt: 'YTM Group',
              href: '/'
            }}
          />
        )}

        <main className="flex-grow">
          <AppRouter />
        </main>

        {!hideLayout && <Footer />}
      </div>
    </>
  );
};

export default App;
