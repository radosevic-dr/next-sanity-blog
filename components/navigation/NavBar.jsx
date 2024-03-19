import style from "@/styles/components/navigation/NavBar.module.scss";
import { NavContextProvider } from "./NavContext";
import { Logo } from "./Logo";
import { Links } from "./Links";
import { Menu } from "./Menu";



export const NavBar = () => {
    return (
        <NavContextProvider>
            <header className={style.navContainer}>
                <Logo />
                <Menu />
                <Links />
            </header>
        </NavContextProvider>
    );
};
