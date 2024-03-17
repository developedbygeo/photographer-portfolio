'use client';

import { useEffect } from 'react';
import { activeAnimation, initCursor } from '@/lib/cursor';

const MagicCursor = () => {
  useEffect(() => {
    initCursor();
    activeAnimation();
    window.addEventListener('scroll', activeAnimation);
  }, []);

  return <div className="cursor" />;
};

export default MagicCursor;
