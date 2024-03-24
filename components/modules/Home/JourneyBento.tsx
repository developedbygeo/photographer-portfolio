import { ImageGrid } from '@/components/elements/ImageGrid';
import mockData from '@/data/journey-gallery.json';
import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

const JourneyBento = ({ className }: WithClassName) => (
  <div className={cn('w-full', className)}>
    <ImageGrid cards={mockData} />
  </div>
);

export default JourneyBento;
