import Link from 'next/link'
import styles from "../styles/header.module.css"

function Header() {
    return (
        <>
            <div className={styles.header}>
                <Link className={styles.link} href={{pathname:`/main`}}>
                    <img
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