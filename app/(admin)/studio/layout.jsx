export const metadata = {
    title: 'Code Wilderness',
    description: 'Sanity studio page',
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className="studio">{children}</body>
        </html>
    );
}