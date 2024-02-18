import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string(),
  phone: z.string(),
  email: z.string(),
});
export function FormSegment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      phone: '',
      email: '',
    },
  });
  function onSubmit() {}

  return (
    <section className="w-full h-full overflow-hidden text-secondary">
      <img
        src={
          'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80'
        }
        alt={'background img'}
        width={1440}
        height={640}
        className={
          'h-[640px] w-full object-cover transition-all hover:scale-105 aspect-[3/4] absolute -z-10'
        }
      />
      <div className="container  h-[640px] flex flex-col items-center pt-32 max-sm:px-2 max-sm:mx-0 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Задать вопрос
        </h1>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          Заполните форму и наш оператор свяжется с вами для консультации.
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-10 text-foreground flex flex-col flex-wrap w-fit max-sm:w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Как к вам обращаться?"
                      {...field}
                      className="bg-[#F0EAD6] h-14 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-wrap gap-7 max-sm:flex-col">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="phone"
                        placeholder="Телефон"
                        {...field}
                        className="bg-[#F0EAD6] w-[300px] max-sm:w-full h-14"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        className="bg-[#F0EAD6] w-[300px] max-sm:w-full h-14"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="flex-1 h-14 w-[190px] max-sm:w-full max-sm:flex-none"
              >
                Отправить
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
