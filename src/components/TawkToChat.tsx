import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_OnLoad?: () => void;
  }
}

export default function TawkToChat() {
  useEffect(() => {
    // Hide as soon as Tawk loads (official callback)
    window.Tawk_OnLoad = function () {
      if (window.Tawk_API && typeof window.Tawk_API.hide === "function") {
        window.Tawk_API.hide();
      }
    };

    // Also poll for Tawk_API in case OnLoad is missed
    const poll = setInterval(() => {
      if (window.Tawk_API && typeof window.Tawk_API.hide === "function") {
        window.Tawk_API.hide();
        clearInterval(poll);
      }
    }, 200);

    // Inject script if not already present
    if (!document.querySelector("script[src*='embed.tawk.to']")) {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = "https://embed.tawk.to/6866553c187a32190fa5b608/1iv7rptj4";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);

      return () => {
        clearInterval(poll);
        document.body.removeChild(s1);
        delete window.Tawk_OnLoad;
      };
    }

    return () => {
      clearInterval(poll);
      delete window.Tawk_OnLoad;
    };
  }, []);
  return null;
}