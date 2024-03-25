import { InfiniteMovingCards } from '@/components/elements/MovingCards';
import testimonialData from '@/data/testimonials.json';
import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

import SmileyFace from '@/assets/smiley.svg';
import Talk from '@/assets/talk.svg';

const MovingTestimonials = ({ className }: WithClassName) => {
  return (
    <>
      <div className="flex gap-2">
        <h3 className="heading-2 mb-4">What our friends are saying...</h3>
        <Talk className="h-20 w-20 relative bottom-4" />
      </div>
      <div
        className={cn(
          'rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden',
          className
        )}
      >
        <InfiniteMovingCards items={testimonialData} direction="left" speed="slow" pauseOnHover />
      </div>
    </>
  );
};

export default MovingTestimonials;
