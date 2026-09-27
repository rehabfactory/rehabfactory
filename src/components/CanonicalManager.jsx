import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://rehabfactory.com.au';

export default function CanonicalManager() {
  const location = useLocation();

  useEffect(() => {
    // Normalise path (lowercase, remove trailing slash except root)
    let path = location.pathname.toLowerCase();
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    const canonicalUrl = `${BASE_URL}${path === '/' ? '' : path}`;

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Also update og:url
    let ogUrl = document.querySelector("meta[property='og:url']");
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  }, [location.pathname]);

  return null;
}
