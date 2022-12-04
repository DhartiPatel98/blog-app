export interface IRoute{
    [key: string]: {
        id: string;
        title: string;
        path: string;
        isPrivate: boolean;
    };
}