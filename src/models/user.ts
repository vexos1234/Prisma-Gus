export interface User {
    is: number;
    email: string;
    name: string;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    published: number;
    authorid: number;
}