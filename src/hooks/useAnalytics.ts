import { useEffect } from 'react';
import { initAnalytics, trackPageview } from '../lib/analytics';

export function useAnalytics() {
  useEffect(() => {
    initAnalytics();
    trackPageview();
  }, []);
}
