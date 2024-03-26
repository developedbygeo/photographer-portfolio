import Image from 'next/image';

import { cn } from '@/lib/utils';
import { WithChildren, WithClassName } from '@/types/UI';

export const SimpleImageBento = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

type SimpleImageBentoItemProps = WithClassName &
  WithChildren & {
    title: string;
    image: string;
  };

export const SimpleImageBentoItem = ({ className, title, image, children }: SimpleImageBentoItemProps) => {
  const sizes = `(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw`;

  return (
    <div
      className={cn(
        'row-span-1 relative rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <Image src={image} alt={title} fill className="object-cover" sizes={sizes} />
      {children}
    </div>
  );
};
