// 반복적으로 사용되는 component를 js로 만들고
// 이에 사용되는 style만 담음 css파일을 아래와 같이 만들어서 import
import styles from "../styles/login.module.css"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router';

export default function Login() {
    let [id, setID] = useState('');
    let [pw, setPW] = useState('');

    const realId = "kiki@naver.com";
    const realPw = "12345678"; 

    const router = useRouter();
    const goToMain = () => {
        router.push('main')
    }   
    
    return (
        <>
            <div className={styles.nav}>
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
            <h3>로그인</h3>
            <form className={styles.loginBar}>
                <div className={styles.boxAndInput}>
                    <div className={styles.loginBox}>ID</div>
                    <input
                        className={styles.loginInput}
                        type='text'
                        id='username'
                        name='username'
                        onChange={e => {
                            setID(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.boxAndInput}>
                    <div className={styles.loginBox}>PW</div>
                    <input
                        className={styles.loginInput}
                        type='password'
                        id='password'
                        name='password'
                        onChange={e => {
                            setPW(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.boxAndBox}>
                    <button
                        type="button"
                        className={styles.loginButton}
                        onClick={e => {
                            if (id.length === 0) {
                                alert('아이디를 입력하세요')
                            } else if (pw.length === 0) {
                                alert('비밀번호를 입력하세요.')
                            } else if (realId === id) {
                                if (realPw === pw) {
                                    e.stopPropagation();
                                    goToMain();
                                }
                                else {
                                    alert('비밀번호가 일치하지 않습니다')
                                }
                            } else {
                                alert('존재하지 않는 계정입니다.');
                            }
                        }}>Login</button>
                    <Link state={{id:id, pw:pw}} href={{pathname:`/signup`}} className={styles.link}><div className={styles.joinButton}>Sign Up</div></Link>
                </div>
                <div className={styles.boxAndBox}>
                    <Link href={{pathname:`/findPW`}} className={styles.link}><div className={styles.findPwButton}>Find PW</div></Link>
                </div>
            </form>
        </>
    )
}