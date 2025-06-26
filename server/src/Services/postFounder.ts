import { Post } from "../Model/Post";

export function findPostById(posts: Post[], id: number): Post | undefined {
    return posts.find((post) => post.id === id);
};

export function findPostByPublisherName(posts: Post[], publisherName: string): Post | undefined {
    return posts.find((post) => post.publisherName === publisherName);
}

export function findPostByPublishDate(posts: Post[], publishDate: string): Post | undefined {
    const date: Date = new Date(publishDate);
    return posts.find((post) => new Date(post.date).getDate() === date.getDate());
}

export function findPostByNumberLikes(posts: Post[], numberLikes: number): Post | undefined {
    return posts.find((post) => post.likes === numberLikes);
}

export function findPostByContent(posts: Post[], content: string): Post | undefined {
    return posts.find((post) => post.content.includes(content));
}