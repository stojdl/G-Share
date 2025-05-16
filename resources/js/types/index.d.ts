export interface User {
    id: number;
    username: string;
    email: string;
    email_verified_at?: string;
    posts?: any;
    friends?: any;
    friendships?: any;
    friendship_requests?: any;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    posts: Array;
    user: User;
    loggedUser: User;
};
