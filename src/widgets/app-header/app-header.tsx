import { Button, buttonVariants } from '@/shared/ui/button';
import { MainNav } from './ui/main-nav';
import { Icons } from './ui/icon';

export function AppHeader() {
  return (
    <header>
      <div className="container border-b flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav
          items={[
            {
              title: 'Home',
              href: '/',
            },
            {
              title: 'Dashboard',
              href: '/',
            },
          ]}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <a href={'#'} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <Button size={'icon'} variant={'ghost'}>
              <>
                <Icons.setting className="h-4 w-4 fill-current" />
                <span className="sr-only">Setting</span>
              </>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
