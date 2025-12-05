import {initTRPC} from '@trpc/server'

const trpc = initTRPC.create()
 
const posts = [
  {
    id: 1,
    author: "user1",
    content: "Привет! Это мой первый пост в нашей социальной сети!",
    comments: [
      {
        id: 1,
        author: "friend1",
        content: "Поздравляю с первым постом! 🚀",
        timestamp: "2025-01-04T10:01:00Z"
      },
      {
        id: 2,
        author: "friend2",
        content: "Здорово, жду больше постов от тебя!",
        timestamp: "2025-01-04T10:03:00Z"
      }
    ],
    likes: 10,
    timestamp: "2025-01-04T09:50:00Z"
  },
  {
    id: 2,
    author: "user2",
    content: "Сегодня прекрасная погода! Как ваши дела?",
    comments: [
      {
        id: 1,
        author: "friend3",
        content: "У нас тоже солнечно! Отличного дня!",
        timestamp: "2025-01-04T11:00:00Z"
      }
    ],
    likes: 7,
    timestamp: "2025-01-04T10:30:00Z"
  },
  {
    id: 3,
    author: "user3",
    content: "Только что посмотрел отличный фильм. Рекомендую всем!",
    comments: [
      {
        id: 1,
        author: "friend4",
        content: "Как называется фильм?",
        timestamp: "2025-01-04T12:00:00Z"
      }
    ],
    likes: 15,
    timestamp: "2025-01-04T11:45:00Z"
  },
  {
    id: 4,
    author: "user4",
    content: "Работа над проектом продвигается отлично! 💻",
    comments: [],
    likes: 20,
    timestamp: "2025-01-04T13:00:00Z"
  }
];

export const TrpcRouter = trpc.router({
    getIdeas: trpc.procedure.query(() => {
        return {posts}
    })
})