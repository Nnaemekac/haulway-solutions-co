import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicStyles = () => {
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    function applyDynamicStyles() {
      document.querySelectorAll("[class*='[']").forEach((el) => {
        el.classList.forEach((cls) => {
          const match = cls.match(/(bg|text|left|right|top|bottom|margin|mt|mr|mb|ml|padding|shadow|bdr-color|bdr-radius|bdr-top-width|bdr-top-color|bdr-top-style)-\[(.+)\]/);
          if (match) {
            const [full, prop, value] = match;

            const cssProp = {
              bg: "backgroundColor",
              text: "color",
              left: "left",
              right: "right",
              top: "top",
              bottom: "bottom",
              margin: "margin",
              mt: "marginTop",
              mr: "marginRight",
              mb: "marginBottom",
              ml: "marginLeft",
              padding: "padding",
              shadow: "boxShadow",
              "bdr-color": "borderColor",
              "bdr-top-color": "borderTopColor",
              "bdr-top-style": "borderTopStyle",
              "bdr-radius": "borderRadius", // Border-radius support
              "bdr-top-width": "borderTopWidth", // Border top width support
            }[prop];

            if (cssProp) {
              // Handle shorthand values for padding, margin, and border-radius
              if (prop === "padding" || prop === "margin" || prop === "bdr-radius") {
                const values = value.split("_");
                if (values.length === 1) {
                  el.style[cssProp] = values[0]; // `border-radius: 10px;`
                } else if (values.length === 2) {
                  el.style[cssProp] = `${values[0]} ${values[1]}`; // `border-radius: 10px 20px;`
                } else if (values.length === 4) {
                  el.style[cssProp] = `${values[0]} ${values[1]} ${values[2]} ${values[3]}`; // `border-radius: 10px 15px 20px 25px;`
                }
              } else {
                el.style[cssProp] = value.replace(/_/g, " ");
              }
            }
          }
        });
      });
    }

    applyDynamicStyles(); // Apply styles initially on route change

    // Watch for DOM changes
    const observer = new MutationObserver(() => applyDynamicStyles());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [location.pathname]); // Runs when the route changes

  return null;
};

export default useDynamicStyles;
