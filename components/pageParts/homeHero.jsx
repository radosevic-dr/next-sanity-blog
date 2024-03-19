import Link from 'next/link';
import Image from 'next/image';
import style from "@/styles/components/pages/HomeHero.module.scss";


export const HomeHero = () => {
    return (
        <div className={style.homeHeroContainer}>
            <div className={style.homeHeroText}>
                <h1>Lorem Ipsum </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptate, mollitia laboriosam enim molestiae vel optio. Quibusdam cum quis eaque, delectus corporis voluptates? Laudantium nemo alias officia eaque enim blanditiis.</p>
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
