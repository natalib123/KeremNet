export interface PostDTO{
    id: number;
    publisherName: string;
    postContent: string;
    postComments: string[];
    postLikes: number;
    postDate: Date;
}