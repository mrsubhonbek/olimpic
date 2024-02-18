import { Button } from '@/shared/ui/button';
import { Card } from './ui/card';
import { Icons } from './ui/icon';
const data = [
  {
    url: 'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
    location: 'Кавказ',
    dir: 4,
    title: 'Гастрономическое путешествие вокруг Кавказа',
    hard: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
    location: 'Алтай',
    dir: 13,
    title: 'Путь к мастерству в приготовлении блюд Алтая',
    hard: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
    location: 'Алтай',
    dir: 4,
    title: 'От горных трав до морских деликатесов',
    hard: 1,
  },
  {
    url: 'https://images.unsplash.com/photo-1614113489854-66422ad300a4?w=300&dpr=2&q=80',
    location: 'Алтай',
    dir: 4,
    title: 'От горных трав до морских деликатесов',
    hard: 1,
  },
];
export function Events() {
  return (
    <section className="bg-[#F0EAD6] relative h-full -z-20 py-[60px]">
      <div className="container max-sm:px-0">
        <h1 className="scroll-m-20pb-2 text-4xl font-bold tracking-tight first:mt-0 mb-[50px] max-sm:text-3xl max-sm:px-4">
          Предстоящие события
        </h1>
        <div className="flex flex-wrap gap-7 justify-center ">
          {data.map((item, index) => {
            if (index > 2) {
              return null;
            }
            return <Card key={item.url} {...item} />;
          })}
        </div>
        {data.length >= 3 && (
          <Button
            variant={'link'}
            className="w-full flex items-center justify-center gap-2 mt-[50px]"
          >
            <span className="uppercase text-primary font-bold">
              Показать все курсы
            </span>
            <Icons.arrow className="w-4 h-4" />
          </Button>
        )}
      </div>
    </section>
  );
}
