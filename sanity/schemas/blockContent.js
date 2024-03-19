import { defineType } from "sanity";

export default defineType({
    name: "blockContent",
    title: "Block Content",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [
                { title: "N", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "H5", value: "h5" },
                { title: "H6", value: "h6" },
            ],
            lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Number", value: "number" },
            ],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                    { title: "Underline", value: "underline" },
                    { title: "Code", value: "code" },
                    { title: "Strike", value: "strike" },
                ],
                annotations: [
                    {
                        name: "url",
                        title: "URL",
                        type: "object",
                        fields: [{ title: "URL", name: "href", type: "url" }],
                    },
                ],
            },
        },

        { type: "image", options: { hotspot: true } },
        { title: "Code Block", type: "code" },
    ],
});
