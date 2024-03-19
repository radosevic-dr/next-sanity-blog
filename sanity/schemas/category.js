import { defineField, defineType } from "sanity";

export default defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => [
                Rule.required().error("You must provide category title"),
            ],
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text"
        }),
    ],
});
