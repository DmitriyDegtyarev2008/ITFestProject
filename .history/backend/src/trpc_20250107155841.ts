import {initTRPC} from '@trpc/server'

  const regForm = {
  title: "Registration Form",
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      placeholder: "Enter your username"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email"
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "Enter your password"
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      required: true,
      placeholder: "Re-enter your password"
    },
    {
      name: "submit",
      type: "submit",
      label: "Register"
    }
  ]
};



const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
    getPosts: trpc.procedure.query(() => {
        return {regForm}
    })     // запрос из сервера get
})

export type TrpcRouter = typeof trpcRouter