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
    <div className="flex">
      <a href="/#" className="flex items-center space-x-2">
        <Icons.logo className="h-12 w-64 max-sm:w-40" />
      </a>
      {items?.length ? (
        <nav className="flex gap-6 max-lg:hidden">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-secondary',
                    item.disabled && 'cursor-not-allowed ',
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
