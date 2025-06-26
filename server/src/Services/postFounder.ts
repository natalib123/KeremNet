import { Post } from "../Model/Post";

export function findPostById(posts: Post[], id: number): Post | undefined {
    return posts.find((post) => post.id === id);
};

export function findPostByPublisherName(posts: Post[], publisherName: string): Post | undefined {
    return posts.find((post) => post.publisherName === publisherName);
}