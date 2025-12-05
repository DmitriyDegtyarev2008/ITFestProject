import {initTRPC} from '@trpc/server'
import {z} from 'zod'
    
const posts = [
    { id: 1, author: 'Author1', content: 'Post content 1' },
    { id: 2, author: 'Author2', content: 'Post content 2' }
]

const trpc = initTRPC.create()
export const trpcRouter = trpc.router({
  register: trpc.procedure
    .input(z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }))
    .mutation(async ({ input }) => {
      const { email, password } = input;
      // Здесь логика регистрации, например, сохранение пользователя в базе данных
      return { message: `Пользователь ${email} зарегистрирован!` };
    }),

  getPosts: trpc.procedure.query(() => {
    return { posts: [{ id: 1, author: 'Author1', content: 'Post content 1' }] };
  }),
});




export type TrpcRouter = typeof trpcRouter