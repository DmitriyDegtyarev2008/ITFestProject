import { inferAsyncReturnType } from "@trpc/server";

export function createContext() {
    return {
        users: [
            {email: 'test@example.com', password: '123456'}
        ]
    }
}

