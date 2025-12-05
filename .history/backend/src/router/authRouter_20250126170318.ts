import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { Context } from '../context';

export const authRouter = router({
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
      })
    )
    .mutation(({ input, ctx }) => {
      const userExists = ctx.users.find((user) => user.email === input.email);
      if (userExists) {
        throw new Error('Пользователь уже существует');
      }
      ctx.users.push(input); // Исправлено ctx.user -> ctx.users
      return { success: true, message: 'Регистр
