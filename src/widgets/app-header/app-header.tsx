/* eslint-disable no-irregular-whitespace */
import { MainNav } from './ui/main-nav';

export function AppHeader() {
  return (
    <header className="bg-primary relative">
      <div className="container  text-secondary flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 ">
        <MainNav
          items={[
            {
              title: 'Гастротуры',
              href: '/#',
            },
            {
              title: 'Бронирование',
              href: '/#',
            },
            {
              title: 'О нас',
              href: '/#',
            },
            {
              title: 'Отзывы',
              href: '/#',
            },
            {
              title: 'Фотографии',
              href: '/#',
            },
            {
              title: 'Контакты',
              href: '/#',
            },
          ]}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <a href="tel:+78007253232" rel="noreferrer">
              8 800 725-32-32
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
