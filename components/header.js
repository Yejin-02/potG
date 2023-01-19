import Link from 'next/link'
import Image from 'next/image';
import styles from "../styles/header.module.css"

function Header() {
    return (
        <>
            <div className={styles.header}>
                <Link className={styles.link} href={{pathname:`/main`}}>
                    <Image
                        className={styles.logo}
                        src='../logo.png'
                        alt='logo'
                    />
                </Link>
            </div>
        </>
    );
}

export default Header;