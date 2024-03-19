import { Post } from "@/components";
import { getPost } from "@/sanity";

export default async function Page({ params }) {
    const { slug } = params;
    const post = await getPost(slug);

    return post ? <Post post={post} /> : null;
}