import { useAuth } from "./auth"

export const useStore = () => {{
    
    const auth: any = useAuth();

    return {
        ...auth
    }}
    
}

export * from "./auth"