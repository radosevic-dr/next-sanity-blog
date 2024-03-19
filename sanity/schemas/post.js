import { defineField, defineType } from "sanity";

export default defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => [Rule.required().error("Post title is requred")]
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => [Rule.required().error("Slug is used for url paths, so its required")]
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" }
        }),
        defineField({
            name: "postImage",
            title: "Post Image",
            type: "image",
            options: {
                hotspot: true
            },
            validation: (Rule) => [Rule.required().error("Post image is required")]
        }),
        defineField({
            name: "categories",
            title: "Categories",
            of: [
                {
                    type: "reference",
                    to: { type: "category" }
                }
            ],
            type: "array",
            validation: [(Rule) => Rule.required().error("Post cateogry is required, chose from existing ones or create new one")]
        }),
        defineField({
            name: "publishDate",
            title: "Publish Date",
            type: "datetime",
            validation: (Rule) => [Rule.required().error("Date is required, choose one from calendar")]
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "blockContent",
            validation: (Rule) => [
                Rule.required().error("Post body is requred")
            ]
        })
    ],

});