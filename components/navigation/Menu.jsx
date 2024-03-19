"use client";
import { useContextSelector } from "use-context-selector";
import style from "@/styles/components/navigation/Menu.module.scss";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { NavContext } from "./NavContext";


export const Menu = () => {
    const menu = useContextSelector(NavContext, (context) => context.menu);
    const handleMenu = useContextSelector(NavContext, (context) => context.handleMenu);
    return (
        <div className={style.menuContainer}>
            {
                menu ? <CloseOutlined className={style.menuItem} onClick={handleMenu} /> :
                    <MenuOutlined className={style.menuItem} onClick={handleMenu} />
            }
        </div>
    );
};
