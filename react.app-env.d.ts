declare module "*.mp4" {
    const src: string;
    export default src;
}

declare module "*.webm" {
    const src: string;
    export default src;
}

import "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        user: DefaultSession;
        error?: string;
    }
}