import { SimpleImageBento, SimpleImageBentoItem } from '@/components/elements/BentoGrid';
import { WithClassName } from '@/types/UI';

import latestShots from '@/data/latest-shots.json';

const LatestShots = ({ className }: WithClassName) => {
  return (
    <SimpleImageBento className={className}>
      {latestShots.map((shot) => {
        const hasDataToDisplay = shot.info && shot.tech;

        return (
          <SimpleImageBentoItem
            className={shot.extendColSpan ? 'relative col-span-2' : ''}
            key={shot.id}
            title={shot.name}
            image={shot.thumbnail}
          >
            {hasDataToDisplay ? (
              <article
                data-is-dark="true"
                className="absolute bottom-0 left-0 bg-neutral-900 text-neutral-50 p-6"
              >
                <p>{shot.name}</p>
                <div className="">
                  <p className="font-light text-sm">
                    {shot.info.location}, {shot.info.date}
                  </p>
                  <p className="font-light text-sm">{shot.tech['Camera Model']}</p>
                </div>
              </article>
            ) : null}
          </SimpleImageBentoItem>
        );
      })}
    </SimpleImageBento>
  );
};

export default LatestShots;
