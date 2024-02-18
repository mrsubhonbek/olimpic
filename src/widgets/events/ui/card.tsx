import { Button } from '@/shared/ui/button';
import { Icons } from './icon';
import { cn } from '@/shared/lib/utils';

export function Card({
  dir = 4,
  location,
  title,
  url,
  hidden,
}: {
  url: string;
  location: string;
  dir: number;
  title: string;
  hard?: number;
  hidden?: boolean;
}) {
  return (
    <article
      className={cn(
        'w-[420px] h-[520px] text-secondary overflow-hidden rounded-sm ',
        hidden && 'hidden',
      )}
    >
      <div className="absolute -z-10">
        <img
          src={url}
          alt={title}
          width={390}
          height={415}
          className={'object-cover transition-all hover:scale-105 aspect-[3/4]'}
        />
      </div>
      <div className="px-5 py-[25px] flex flex-col item-between justify-between  h-full">
        <Button className="max-w-28 gap-2">
          <Icons.location className="h-4 w-4" />
          <p className="leading-7 ">{location}</p>
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <Icons.date className="w-4 h-4" />
            <span>{dir} дня</span>
          </div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-4">
            {title}
          </h3>
          <div>
            <span>Сложность:</span>
            <Icons.star className="h-4 w-20" />
          </div>
        </div>
      </div>
    </article>
  );
}
