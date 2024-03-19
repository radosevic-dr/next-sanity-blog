import style from "@/styles/components/footer/Footer.module.scss";
import Link from "next/link";

const date = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <p>
                Copyright &copy; {date}
                <span className={style.company}>
                    {" "}codewilderness
                </span>
            </p>
            <p className={style.ja}>by{" "}
                <Link href="https://github.com/radosevic-dr">
                    Radosevic Dejan
                </Link>
            </p>
        </footer>
    );
};
