import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"
import ModalBase from '../pages/ModalBase';
import LogoutModal from '../pages/LogoutModal';

function Header() {
    const [isActive, setIsActive] = useState(false);    

    const onClickModalOn = () => {
        setIsActive(true);
    };

    const onClickModalOff= () => {
        setIsActive(false);
    };

    const router = useRouter()

    const onClickMove = () => {
        router.replace('/');
    };

    return (
        <>
        <div className={styles.nav}>
            <ul>
                <li className={styles.navLink}><button onClick={onClickModalOn} className={styles.logoutBtn}>logout</button></li>
                <ModalBase active={isActive} closeEvent={onClickModalOff}>
                    <LogoutModal actionEvent={onClickMove} closeEvent={onClickModalOff}></LogoutModal>
                </ModalBase>
                <li><Link className={styles.navLink} href={{pathname:`/mypage`}}>my page</Link></li>
            </ul>
        </div>
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