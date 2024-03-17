import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';
import { ImageTechnicalInfo, ImageTextInfo } from '@/types/data';

import { PiDotOutlineFill } from 'react-icons/pi';

type JourneyImageInfoProps = WithClassName & {
  textual?: ImageTextInfo;
  tech?: ImageTechnicalInfo;
};

const ImageGridInfo = ({ className, textual, tech }: JourneyImageInfoProps) => {
  if (!textual || !tech) return null;

  return (
    <article className={cn('flex-col gap-2', className)}>
      <div>
        <div className="flex gap-1 items-center">
          <p>
            {textual.title} - {textual.location}
          </p>
          <PiDotOutlineFill className="text-neutral-100" />
          <p>{textual.description}</p>
        </div>
      </div>
      <div>
        <p>{tech['Camera Model']}</p>
        <p className="font-light text-white">
          {tech['Lens Used']} - {tech.Aperture} - {tech['Shutter Speed']}
        </p>
      </div>
    </article>
  );
};

export default ImageGridInfo;
