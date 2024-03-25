'use client';

import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';
import { motion } from 'framer-motion';
import React from 'react';

type ScrollingTapeProps = WithClassName & {
  texts: string[];
  direction: 'left' | 'right';
};

const ScrollingTape = ({ className, texts, direction }: ScrollingTapeProps) => {
  // Calculate the animation's initial and animate values based on direction
  const isLeftDirection = direction === 'left';

  const repeatedTexts = Array(10).fill(texts).flat(); // Repeat texts to ensure coverage

  const tapeAnimation = {
    hidden: { translateX: isLeftDirection ? '0%' : '-100%' },
    visible: {
      translateX: isLeftDirection ? '-100%' : '0%',
    },
  };

  return (
    <div className={cn('overflow-hidden whitespace-nowrap border-y border-y-neutral-800', className)}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={tapeAnimation}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="flex gap-2 md:gap-8 px-2"
      >
        {repeatedTexts.map((text, index) => (
          <span key={index} className="text-4xl font-medium px-12">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTape;
