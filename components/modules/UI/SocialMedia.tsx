import socialMedia from '@/data/socialMedia';
import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

const SocialMedia = ({ className }: WithClassName) => {
  return (
    <div className={cn('flex flex-row items-center space-x-4', className)}>
      {socialMedia.map((social) => {
        const Icon = social.icon;
        return (
          <a
            className="rounded-full p-2 border-neutral-300 border"
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
