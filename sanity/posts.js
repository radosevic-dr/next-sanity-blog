import { groq } from "next-sanity";
import client from "@/client";

export const getPosts = async (categories, postOrder) => {
    let query = groq`*[_type == "post" && categories[]->title match $categories] {
        title,
        slug,
        author,
        postImage {
            asset -> {
                _id, url
            }
        },
        categories[]->{title},
        publishDate,
        body
    }`;

    switch (postOrder) {
        case "asc":
            query += `| order(publishDate asc)`;
            break;
        case "desc":
            query += `| order(publishDate desc)`;
            break;
        default:
            return;
    }

    const posts = await client.fetch(query, {
        categories: categories
    });

    return posts;
};

// One post
export const getPost = async (slug) => {
    const query = groq`*[_type == "post" && slug.current == "${slug}"]{
      title,
      postImage{
        asset -> {
          _id,
          url
        }
      },
      publishDate,
      body[]{...}
    }[0]`;
    const post = await client.fetch(query);
    return post;
};