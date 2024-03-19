import "@/styles/globals.css";
import style from "@/styles/layouts/BaseLayout.module.scss";
import { NavBar, Footer } from "@/components";


export const metadata = {
  title: 'Code Wilderness',
  description: 'Blog about development, programming, technology, nature, survival, bushcraft and beyond',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" >
      <body className={style.baseLayout}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
