import Image from "next/image";
import style from "@/styles/components/ui/PostImage.module.scss";

export const PostImage = (props) => {
    const { src, alt, ...rest } = props;
    return (
        <div className={style.imageContainer}>
            <Image
                src={src}
                alt={alt}
                {...rest}
                width={400}
                height={225}

                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className={style.image}
            />
        </div>
    );
};
