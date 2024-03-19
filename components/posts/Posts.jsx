import { Card } from "./Card";
import style from "@/styles/components/posts/Posts.module.scss";

export const Posts = (props) => {
    const { posts, pageRoute, title } = props;
    return (
        <div className={style.postsContainer}>
            <div className={style.postsTitle}>
                <h1>{title}</h1>
                <span></span>
            </div>
            <div className={style.postsContent}>
                {posts.map(post => {
                    return (
                        <Card key={post.slug.current} post={post} pageRoute={pageRoute} />
                    );
                })}
            </div>
        </div>
    );
};
