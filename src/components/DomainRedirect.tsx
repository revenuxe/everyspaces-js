import { useEffect } from "react";

const DomainRedirect = () => {
  useEffect(() => {
    const hostname = window.location.hostname;
    // Redirect old .com domain to .in
    if (hostname === "intorza.com" || hostname === "www.intorza.com") {
      const newUrl = window.location.href.replace(/intorza\.com/, "intorza.in");
      window.location.replace(newUrl);
    }
  }, []);

  return null;
};

export default DomainRedirect;
