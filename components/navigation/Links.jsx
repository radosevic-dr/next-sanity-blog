"use client";
import Link from "next/link";
import { useContextSelector } from "use-context-selector";
import { NavContext } from "./NavContext";
import { navLinks } from "@/constants/navLinks";
import style from "@/styles/components/navigation/Links.module.scss";

export const Links = () => {
    const menu = useContextSelector(NavContext, (v) => v.menu);
    const handleMenu = useContextSelector(NavContext, (v) => v.handleMenu);
    return (
        <nav
            className={`${style.linksContainer} 
        ${!menu ? style.hideNav : style.showNav}`}
        >
            {
                navLinks.map(link => {
                    const { id, title, sublinks } = link;
                    return (
                        <div key={id}>
                            <Link href={`/${id}`} onClick={handleMenu}>{title}</Link>
                        </div>
                    );
                }
                )}
        </nav>
    );
};
