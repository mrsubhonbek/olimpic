import { Icons } from './ui/icon';

export function AppFooter() {
  return (
    <footer className="bg-[#F0EAD6]">
      <div className="container py-[90px]">
        <h2 className=" pb-2 text-4xl font-semibold tracking-tight first:mt-0">
          Обучение
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-sm:w-full w-1/2">
          Обучение проводится квалифицированными шеф-поварами, имеющими опыт
          работы в различных кухнях мира, включая Кавказскую, Крымскую,
          Индийскую, Европейскую и другие.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-[50px]">
          Программа мастер-классов
        </h3>
        <div className="flex flex-wrap">
          <div className="flex mt-[30px] gap-4">
            <Icons.earth className="w-4 h-4" />
            <p className="max-w-[250px]">
              Изучение мировых кулинарных традиций и трендов
            </p>
          </div>
          <div className="flex mt-[30px] gap-4">
            <Icons.barque className="w-4 h-4" />
            <p className="max-w-[250px]">
              Обучение использованию кулинарного оборудования
            </p>
          </div>
          <div className="flex mt-[30px] gap-4">
            <Icons.security className="w-4 h-4" />
            <p className="max-w-[250px]">
              Семинары по устойчивой кулинарии и пищевой безопасности
            </p>
          </div>
          <div className="flex mt-[30px] gap-4">
            <Icons.fork className="w-4 h-4" />
            <p className="max-w-[250px]">
              Объяснение тонкостей кулинарных процессов
            </p>
          </div>
        </div>
        <div className="w-full absolute h-2 bg-primary/50 rounded-full mt-2">
          <div className="w-4 h-4 rounded-full absolute -top-1 bg-primary"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
