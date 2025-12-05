import { inferAsyncReturnType } from "@trpc/server";

export function createContext() {
    return {
        users: [
            {email: 'test@example'}
        ]
    }
}