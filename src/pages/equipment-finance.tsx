import React from 'react';

const EquipmentFinancePage: React.FC = () => {
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

export default EquipmentFinancePage; // 👈 this is the only thing that matters
