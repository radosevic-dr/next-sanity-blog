"use client";
import BlockContent from "@sanity/block-content-to-react";
import { urlForImg, serializers } from "@/sanity";
import { PostImage } from "../ui";
import style from "@/styles/components/posts/Post.module.scss";

export const Post = (props) => {
    const { post } = props;
    return (
        <div className={style.postContainer}>
            {post.postImage &&
                <PostImage
                    src={`${urlForImg(post.postImage).url()}`}
                    alt={`${post.title} main image`}
                    aria-label={`Post image about ${post.title}`}
                />
            }
            <h1 className={style.postTitle} aria-label={post.title}>
                {post.title}
            </h1>
            <BlockContent
                className={style.blockContent}
                blocks={post.body}
                serializers={serializers}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            />
        </div>
    );
};