import { useEffect, useRef, useState } from 'react';

const DEFAULT_ENDPOINT = 'https://api.nanobanana.dev/avatar?theme=mario-galaxy&dimension=relativity';
const NANOBANANA_ENDPOINT = import.meta.env.VITE_NANOBANANA_API || DEFAULT_ENDPOINT;

export const useNanoBananaAvatar = (seed = 'suraj-prakash-sahu') => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [status, setStatus] = useState('idle');
  const abortRef = useRef();

  useEffect(() => {
    const fetchAvatar = async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setStatus((prev) => (prev === 'ready' ? 'refreshing' : 'loading'));

      try {
        const response = await fetch(`${NANOBANANA_ENDPOINT}&seed=${encodeURIComponent(seed)}`, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error('Avatar fetch failed');
        }

        const payload = await response.json();
        const computedAvatar = payload?.avatar || payload?.image || payload?.url || null;

        if (computedAvatar) {
          setAvatarUrl(computedAvatar);
          setStatus('ready');
        } else {
          throw new Error('Avatar missing');
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.warn('Nanobanana avatar fallback:', error.message);
          setStatus('error');
        }
      }
    };

    fetchAvatar();
    const refreshTimer = setInterval(fetchAvatar, 45000);

    return () => {
      abortRef.current?.abort();
      clearInterval(refreshTimer);
    };
  }, [seed]);

  return { avatarUrl, status };
};
