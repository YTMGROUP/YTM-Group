import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Hide navbar + footer
    document.body.classList.add("hide-layout");

    return () => {
      document.body.classList.remove("hide-layout");
    };
  }, []);

  // Pass query params to iframe (for campaign tracking)
  const queryParams = location.search;

  return (
    <iframe
      src={`https://ytmfinance.staging.tactik.com.au/thank-you/${queryParams}`}
      title="Thank You"
      style={{ width: "100%", height: "100vh", border: "none" }}
      onLoad={(e: React.SyntheticEvent<HTMLIFrameElement>) => {
        const iframe = e.target as HTMLIFrameElement;
        try {
          const height = iframe.contentWindow?.document.body.offsetHeight;
          if (height) iframe.style.height = height + "px";
        } catch {
          iframe.style.height = "100vh";
        }
      }}
    />
  );
};

export default ThankYouPage;
