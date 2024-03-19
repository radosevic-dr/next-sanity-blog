"use client";
import Link from "next/link";
import { urlForImg } from '@/sanity/urlForImg';
import { PostImage } from "../ui";
import style from "@/styles/components/posts/Card.module.scss";

export const Card = ({ post, pageRoute }) => {
    const description = post.body[0].children[0].text;
    const slug = post.slug.current;
    return (
        <div className={style.cardContainer}>
            {post.postImage && (
                <PostImage
                    src={`${urlForImg(post.postImage).url()}`}
                    alt={post.title}
                />
            )}

            <div className={style.cardBody}>
                <h3 className={style.cardTitle}>
                    {post.title}
                </h3>
                <p className={style.cardDescription}>{description.substring(0, 150)}...</p>
                <div className={style.readMore}>
                    <Link href={`/${pageRoute}/${slug}`} className={style.cardLink}>
                        Read More...
                    </Link>
                </div>
            </div>
        </div>
    );
};
