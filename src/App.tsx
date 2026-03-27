import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header, Footer, GoogleAnalytics, ResourcePreloader } from '@/components';
import { YTMLogo } from '@/assets';
import AppRouter from '@/router/AppRouter';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();

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

      <main className={hideLayout ? "h-screen" : "flex-grow"}>
        <AppRouter />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

  const criticalImages: string[] = [
    // Any critical images for preloading
  ];

  return (
    <HelmetProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <SmoothScrollProvider>
          {/* Google Analytics */}
          <GoogleAnalytics 
            trackingId={GA_TRACKING_ID}
            enableDevelopmentTracking={false}
          />

          {/* Performance Optimizations */}
          <ResourcePreloader
            criticalImages={criticalImages}
            enableAnalytics={import.meta.env.DEV}
          />

          {/* App content */}
          <AppContent />
        </SmoothScrollProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
