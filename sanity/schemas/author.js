import { defineField, defineType } from 'sanity';

export default defineType({
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        defineField({
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: Rule => [Rule.required().error("Author full name is required"),]
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule) => [
                Rule.required().error("Click on generate to provide slug"),
            ],
            options: {
                source: "fullName",
                maxLength: 96,
            },
        }),
        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

        defineField({
            name: "bio",
            title: "Bio",
            type: "array",
            of: [
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "fullName",
            media: "image",
        },
    },
});