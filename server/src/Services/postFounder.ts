import { Post } from "../Model/Post";

//Retuns post with given ID or undefind if not found
export function findPostById(posts: Post[], id: number): Post | undefined {
    return posts.find((post) => post.id === id);
};

export function findPostsByPublisherName(posts: Post[], publisherName: string): Post[] {
    return posts.filter((post) => post.publisherName === publisherName);
}

export function findPostsByPublishDate(posts: Post[], publishDate: string): Post[] {
    const date: Date = new Date(publishDate);
    return posts.filter((post) => new Date(post.date).getDate() === date.getDate());
}

export function findPostsByNumberLikes(posts: Post[], numberLikes: number): Post[] {
    return posts.filter((post) => post.likes === numberLikes);
}

export function findPostsByContent(posts: Post[], content: string): Post[] {
    return posts.filter((post) => post.content.includes(content));
}