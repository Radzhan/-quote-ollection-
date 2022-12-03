export interface Request {
    author: string;
    category: string;
    text: string
    id: string
}

export interface Response {
    id: Request;
}
