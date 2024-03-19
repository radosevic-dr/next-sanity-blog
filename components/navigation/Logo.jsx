"use client";
import Image from "next/image";
import Link from "next/link";
import { useContextSelector } from "use-context-selector";
import { NavContext } from "./NavContext";


export const Logo = () => {
    const handleMenu = useContextSelector(NavContext, (v) => v.handleMenu);
    const menu = useContextSelector(NavContext, (v) => v.menu);
    return (
        <div>
            <Link href="/" onClick={() => menu ? handleMenu() : null}>
                <Image src="/logoTest.png" alt="Logo image" width={70} height={70} />
            </Link>
        </div>
    );
};
