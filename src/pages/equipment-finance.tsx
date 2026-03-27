import React, { useEffect } from 'react';

const EquipmentFinancePage: React.FC = () => {

  useEffect(() => {
    // Add class to hide navbar + footer
    document.body.classList.add("hide-layout");

    // Cleanup when leaving page
    return () => {
      document.body.classList.remove("hide-layout");
    };
  }, []);

  return (
    <iframe
      src="https://ytmfinance.staging.tactik.com.au/"
      title="Equipment Finance"
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

export default EquipmentFinancePage;
