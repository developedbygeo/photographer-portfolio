'use client';

import cameraLottie from '@/assets/lottie/camera.json';
import { WithClassName } from '@/types/UI';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player';

const CtaLottie = ({ className }: WithClassName) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const stopFrame = 108;

  return (
    <div className={className} ref={containerRef}>
      <Lottie
        play={isInView}
        loop={false}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        animationData={cameraLottie}
        segments={[0, stopFrame]}
      />
    </div>
  );
};

export default CtaLottie;
