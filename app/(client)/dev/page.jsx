
import { Posts } from "@/components";
import { getPosts } from "@/sanity/posts";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Dev() {
    const posts = await getPosts("dev", "desc");

    return <div>
        <Posts posts={posts} pageRoute="dev" title="Dev Articles" />
    </div>;

}