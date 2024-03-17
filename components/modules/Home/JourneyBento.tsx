import { SimpleImageBento, SimpleImageBentoItem } from '@/components/elements/BentoGrid';
import mockData from '@/data/journey-gallery.json';
import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

const JourneyBento = ({ className }: WithClassName) => (
  <SimpleImageBento className={cn('', className)}>
    {mockData.map((item, i) => {
      return (
        <SimpleImageBentoItem className={i === 3 || i === 6 ? 'md:col-span-2' : ''} key={item.id} {...item} />
      );
    })}
  </SimpleImageBento>
);

export default JourneyBento;
