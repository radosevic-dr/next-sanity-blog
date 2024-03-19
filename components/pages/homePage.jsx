
import { getPosts } from "@/sanity";
import style from "@/styles/components/pages/HomePage.module.scss";
import { Contact } from '../contact';
import { HomeHero } from '../pageParts/homeHero';
import { HomePosts } from '../pageParts/homePosts';

export default async function HomePage() {
    const devPosts = await getPosts("dev", "desc");
    const blogPosts = await getPosts("blog", "desc");
    return (
        <main className={style.homePageContainer}>
            <HomeHero />
            <HomePosts title="Education - code based content here" posts={devPosts} urlPath="dev" />
            <HomePosts title="Blog with mixed content here" posts={blogPosts} urlPath="blog" />
            <Contact />
        </main>
    );
};
