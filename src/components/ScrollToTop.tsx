import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls smoothly to the top whenever the location’s pathname changes. */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null; // renders nothing
};

export default ScrollToTop;
