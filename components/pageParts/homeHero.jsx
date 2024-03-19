import Link from 'next/link';
import Image from 'next/image';
import style from "@/styles/components/pages/HomeHero.module.scss";


export const HomeHero = () => {
    return (
        <div className={style.homeHeroContainer}>
            <div className={style.homeHeroText}>
                <h1>Code Unleashed, Nature Explored: </h1>
                <p>Welcome to CodeWilderness.me, the junction where lines of code intersect with untamed terrains. Immerse yourself in the dual thrill of coding innovation and outdoor exploration, and witness how technology and nature coalesce to create an unforgettable journey.</p>
                <div className={style.homeHeroLinks}>
                    <Link href="/dev">Unleash Code</Link>
                    <Link href="/blog">Explore Nature</Link>
                </div>
            </div>

            <div className={style.homeHeroImage}>
                <Image src="/World.png" alt="Home hero image" width={400} height={400} className={style.heroImage} />
            </div>
        </div>
    );
};
