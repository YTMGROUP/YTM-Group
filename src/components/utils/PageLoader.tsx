import React from 'react';

interface PageLoaderProps {
  message?: string;
  fullScreen?: boolean;
  minimal?: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = 'Loading...', 
  fullScreen = true,
  minimal = false 
}) => {
  if (minimal) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    : "flex flex-col items-center justify-center min-h-[400px] w-full";

  return (
    <div className={containerClasses}>
      {/* Loading spinner */}
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-neutral-200"></div>
        {/* Inner spinning ring */}
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-600 border-t-transparent absolute top-0 left-0"></div>
      </div>
      
      {/* Loading text */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-medium text-neutral-900">
          {message}
        </h3>
      </div>
    </div>
  );
};

// Skeleton loader for specific content areas
export const ContentSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="space-y-4">
      {/* Header skeleton */}
      <div className="h-8 bg-neutral-200 rounded w-3/4"></div>
      <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
      
      {/* Content skeleton */}
      <div className="space-y-3 mt-6">
        <div className="h-4 bg-neutral-200 rounded"></div>
        <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
        <div className="h-4 bg-neutral-200 rounded w-4/6"></div>
      </div>
      
      {/* Button skeleton */}
      <div className="h-10 bg-neutral-200 rounded w-32 mt-6"></div>
    </div>
  </div>
);

// Route-specific loading component
export const RouteLoader: React.FC<{ routeName?: string }> = ({ routeName }) => (
  <PageLoader 
    message={routeName ? `Loading ${routeName}...` : 'Loading page...'} 
    fullScreen={false}
  />
);

export default PageLoader; 