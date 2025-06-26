import { Post } from "../Model/Post";

export function findPostById(posts: Post[], id: number): Post | undefined {
    return posts.find((i) => i.id === id);
};

export function findPostByPublisherName(posts: Post[], publisherName: string): Post | undefined {
    return posts.find((i) => i.publisherName === publisherName);
}