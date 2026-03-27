function WordPressPage({ https://ytmfinance.staging.tactik.com.au/ }) {
  return (
    <iframe
      src={url}
      title="WordPress Page"
      style={{ width: "100%", border: "none" }}
      onLoad={(e) => {
        // Auto-adjust height to content
        e.target.style.height =
          e.target.contentWindow.document.body.offsetHeight + "px";
      }}
    />
  );
}
