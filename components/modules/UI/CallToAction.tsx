import { cn } from '@/lib/utils';
import { WithChildren, WithClassName } from '@/types/UI';

type CallToActionProps = WithClassName &
  WithChildren & {
    innerWrapperClassName?: string;
    title: string;
    text?: string;
  };

const CallToAction = ({ className, innerWrapperClassName, children, title, text }: CallToActionProps) => {
  return (
    <div className={cn('relative', className)}>
      <div className={innerWrapperClassName}>
        <h3 className={cn('heading-2', text ? 'mb-2' : 'mb-4')}>{title}</h3>
        {text && <p className="subtitle">{text}</p>}
        {children}
      </div>
    </div>
  );
};

export default CallToAction;
