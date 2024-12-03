import Link from "next/link";
import style from "./index.module.css";

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function ButtonLink({href,children}: Props) {
    return (
        <Link href={href} className={style.button}>
            {children}
        </Link>
    );
}