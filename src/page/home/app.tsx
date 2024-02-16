import { buttonVariants } from '@/shared/ui/button';

export function Home() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href={'#'}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={'#'}
          className={buttonVariants({ variant: 'outline' })}
        >
          GitHub
        </a>
      </div>
    </main>
  );
}