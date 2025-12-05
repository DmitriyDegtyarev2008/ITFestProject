import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create();
const { router, procedure } = t;

export const authRouter = router({
  register: procedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
      })
    )
    .mutation(({ input, ctx }) => {
      const userExists = ctx.users.find((user) => user.email === input.email);
      if (userExists) {
        throw new Error('Пользователь уже существует!');
      }
      ctx.users.push(input);
      return { success: true, message: 'Регистрация успешна' };
    }),
  login: procedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const user = ctx.users.find(
        (u) => u.email === input.email && u.password === input.password
      );
      if (!user) {
        throw new Error('Неверный email или пароль');
      }
      return { success: true, message: 'Вход выполнен успешно' };
    }),
});
