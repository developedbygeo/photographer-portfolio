'use client';

import HeaderContent from '@/components/modules/UI/Header/HeaderContent';
import Header from '@/components/modules/UI/Header/HeaderContent';
import { cn } from '@/lib/utils';
import { WithChildren } from '@/types/UI';
import {
  AnimatePresence,
  MotionConfig,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  motion,
} from 'framer-motion';
import { useState } from 'react';

const MotionLayout = ({ children }: WithChildren) => {
  const [headerVisible, setHeaderVisible] = useState(true);
  let shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setHeaderVisible(true);
      } else {
        if (direction === 0 || direction < 0) {
          setHeaderVisible(true);
        } else {
          setHeaderVisible(false);
        }
      }
    }
  });

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <AnimatePresence>
        <motion.header
          key="header"
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: headerVisible ? 0 : -100,
            opacity: headerVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            'fixed top-0 left-0 z-[100] border-b border-b-neutral-200 bg-neutral-100 transition-colors w-screen'
          )}
        >
          <HeaderContent />
        </motion.header>

        <main className="mt-[15vh]">{children}</main>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default MotionLayout;
