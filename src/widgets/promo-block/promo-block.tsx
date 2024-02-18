import { Button } from '@/shared/ui/button';

export function PromoBlock() {
  return (
    <section className="w-full h-full  overflow-hidden text-secondary">
      <img
        src={
          'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1440&dpr=2&q=80'
        }
        alt={'background img'}
        width={1440}
        height={640}
        className={
          'h-[640px] w-full object-cover transition-all hover:scale-105 aspect-[3/4] absolute -z-10'
        }
      />
      <div className="container px-[105px] h-[640px] pt-[125px] flex flex-col gap-7 max-lg:items-center max-lg:px-5">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Исследуйте вкусы Кавказа
        </h1>
        <p className="leading-7  max-w-[500px] max-lg:text-center max-sm:max-w-[300px]">
          В сопровождении опытных шеф-поваров вы откроете для себя богатство
          кавказской кухни и научитесь готовить традиционные блюда.
        </p>
        <Button size={'lg'} className="max-w-[240px]">
          Подробнее о курсе
        </Button>
      </div>
    </section>
  );
}
