import { cn } from '@/shared/lib/utils';
import { Icons } from './icon';

interface MainNavProps {
  items?: {
    title: string;
    href: string;
    disabled?: boolean;
  }[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <a href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">Name</span>
      </a>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </a>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
