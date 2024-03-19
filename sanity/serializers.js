"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";



export const serializers = {
    types: {
        code: ({ node }) => {
            const { language, code } = node;

            return <SyntaxHighlighter
                language={language}
                style={dracula}
                showLineNumbers={true}
                lineNumberStyle={{ color: "#d9d9d9" }}
                customStyle={{ fontSize: "1.5rem" }}
                codeTagProps={{ style: { fontSize: "1.5rem" } }}
                wrapLines={true}
                lineProps={(line) => ({ style: { fontSize: "1.5rem" } })}
                showInlineLineNumbers={true}

            >{code}</SyntaxHighlighter>;
        },
    }
};