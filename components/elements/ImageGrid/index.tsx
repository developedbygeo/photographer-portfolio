'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ImageTechnicalInfo, ImageTextInfo } from '@/types/data';
import JourneyImageInfo from '@/components/elements/ImageGrid/ImageGridInfo';

type Card = {
  id: number | string;
  thumbnail: string;
  className: string;
  textual: ImageTextInfo;
  tech: ImageTechnicalInfo;
};

export const ImageGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, '')}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              'relative overflow-hidden',
              selected?.id === card.id
                ? 'rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'
                : lastSelected?.id === card.id
                ? 'z-40 bg-white rounded-xl h-full w-full'
                : 'bg-white rounded-xl h-full w-full'
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          'fixed w-screen top-0 left-0 h-screen bg-transparent z-10',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      data-cursor="click"
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        'object-cover object-top absolute inset-0 h-full w-full transition duration-200',
        loaded ? 'blur-none' : 'blur-md'
      )}
      alt={card.textual.title}
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black/10 opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative flex py-3.5 bg-neutral-900/50 px-8 pb-4 z-[70]"
      >
        <JourneyImageInfo className="text-neutral-100" textual={selected?.textual} tech={selected?.tech} />
      </motion.div>
    </div>
  );
};
