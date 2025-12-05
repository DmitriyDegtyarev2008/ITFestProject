import 
import { createTRPCRouter, publicProcedure } from './trpc';

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }))
    .mutation(async ({ input }) => {
      // Проверка на существующего пользователя
      const existingUser = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new Error('User already exists. Please log in.');
      }

      // Хэширование пароля и создание нового пользователя
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const user = await prisma.user.create({
        data: { email: input.email, password: hashedPassword },
      });

      return { success: true, message: 'User registered successfully!' };
    }),

  login: publicProcedure
    .input(z.object({
      email: z.string().email(),
      password: z.string(),
    }))
    .mutation(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (!user) throw new Error('User not found');

      const isValidPassword = await bcrypt.compare(input.password, user.password);

      if (!isValidPassword) throw new Error('Invalid credentials');

      // Генерация токена
      return { success: true, message: 'Login successful' };
    }),
});
