
import style from "@/styles/components/posts/HomePosts.module.scss";
import { Card } from "../posts/Card";

export const HomePosts = (props) => {
    const { title, urlPath, posts } = props;
    return (
        <div className={style.homePostsContainer}>
            <div className={style.homePostsTitle}>{title} <span className={style.separatorLine}></span></div>

            <div className={style.homePosts}>
                {
                    posts.slice(0, 3).map(post => {
                        const description = post.body[0].children[0].text;
                        return (
                            <Card key={post.slug.current} post={post} pageRoute={urlPath} />
                        );
                    })
                }
            </div>

        </div>
    );
};
