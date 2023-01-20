import Head from 'next/head'
import mainStyles from '../styles/main.module.css'
import styles from '../styles/signup.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/header'

export default function SignUp() {

    let [id, setID] = useState('');
    let [pw, setPW] = useState('');

    return(
        <>
        <Head>
            <title>PotG</title>
            <meta name="description" content="potG main" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/potg.ico" />
        </Head>
        <main className={mainStyles.main}>
            <Header/>
            <h3>회원가입</h3>
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
                        className={styles.signupButton}
                        onClick={e => {
                            if (id.length === 0) {
                                alert('아이디를 입력하세요')
                            } else if (pw.length === 0) {
                                alert('비밀번호를 입력하세요.')
                            } else {
                                alert('존재하지 않는 계정입니다.');
                            }
                        }}>Sign Up
                    </button>
                </div>
            </form>
        </main>
        </>
    )
}