import { BrowserRouter, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header, Footer, GoogleAnalytics, ResourcePreloader } from '@/components';
import { YTMLogo } from '@/assets';
import AppRouter from '@/router/AppRouter';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import React from 'react';
import { trackPageView } from "@/utils/facebookPixel";

// Content that depends on location must be inside Router
function AppContent() {
  const location = useLocation();

 // Trigger FB Pixel on route change
  useEffect(() => {
    // Uncomment this when you want Pixel tracking
    trackPageView();
  }, [location.pathname]);

  // Routes where Header/Footer should be hidden
  const hideLayoutRoutes = ['/services/equipment-finance'];
  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
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

      <main className={hideLayout ? 'h-screen' : 'flex-grow'}>
        <AppRouter />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

  const criticalImages: string[] = [];

  return (
    <HelmetProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <SmoothScrollProvider>
          <GoogleAnalytics 
            trackingId={GA_TRACKING_ID}
            enableDevelopmentTracking={false}
          />

          <ResourcePreloader
            criticalImages={criticalImages}
            enableAnalytics={import.meta.env.DEV}
          />

          {/* This is the App content that uses useLocation */}
          <AppContent />
        </SmoothScrollProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
