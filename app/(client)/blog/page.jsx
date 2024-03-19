import { Posts } from "@/components";
import { getPosts } from "@/sanity/posts";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Blog() {
    const posts = await getPosts("blog", "desc");

    return <div>
        <Posts posts={posts} pageRoute="blog" title="Outdoor Articles" />
    </div>;

}
