// import { buttonVariants } from '@/shared/lib/utils';
import { Events } from '@/widgets/events/events';
import { FormSegment } from '@/widgets/form/form';
import { PromoBlock } from '@/widgets/promo-block/promo-block';

export function Home() {
  return (
    <main className="grid items-center px-0 overflow-x-hidden max-w-screen">
      <PromoBlock />
      <Events />
      <FormSegment />
    </main>
  );
}
