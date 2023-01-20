import Head from 'next/head'
import mainStyles from '../styles/main.module.css'
import styles from '../styles/find.module.css'
import { useState } from 'react'
import Header from '../components/header'

export default function FindPW() {
    let [id, setID] = useState('');
    let [auth, setAuth] = useState('');
    let [newPW, setNewPW] = useState('');
    let [stat1, setStat1] = useState(true);
    let [stat2, setStat2] = useState(false);
    let [stat3, setStat3] = useState(false);
    let [stat4, setStat4] = useState(false);
    const code = 'correctCode';

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
          <h3>PW 찾기</h3>
          <ul className={styles.nav}>
            <li className={stat1 ? styles.ing : styles.notyet}>1. ID 입력</li>
            <li className={stat2 ? styles.ing : styles.notyet}>2. 인증 번호 입력</li>
            <li className={stat3 ? styles.ing : styles.notyet}>3. 비밀번호 변경</li>
          </ul>
          <div className={stat1 ? styles.first : styles.firsted}>
            <br/>
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
                <div className={styles.boxAndBox}>
                    <button
                        type="button"
                        className={styles.signupButton}
                        onClick={e => {
                            if (id.length === 0) {
                              alert('아이디를 입력하세요')
                            } else if (id === 'kiki@naver.com') {
                              setStat1(false)
                              setStat2(true)
                            } else {
                              alert('존재하지 않는 계정입니다.');
                            }
                        }}>인증 번호 전송
                    </button>
                </div>
            </form>
          </div>

          <div className={stat2 ? styles.first : styles.firsted}>
            <br/>
            <form className={styles.loginBar}>
                <div className={styles.boxAndInput}>
                    <div className={styles.loginBox}>인증 번호</div>
                    <input
                        className={styles.loginInput}
                        type='text'
                        id='code'
                        name='code'
                        onChange={e => {
                            setAuth(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.boxAndBox}>
                    <button
                        type="button"
                        className={styles.signupButton}
                        onClick={e => {
                            if (auth.length === 0) {
                              alert('인증 번호를 입력하세요')
                            } else if (auth === 'correctCode') {
                              setStat2(false)
                              setStat3(true)
                            } else {
                              alert('인증 번호가 올바르지 않습니다.');
                            }
                        }}>인증 번호 확인
                    </button>
                </div>
            </form>
          </div>

          <div className={stat3 ? styles.first : styles.firsted}>
            <br/>
            <form className={styles.loginBar}>
                <div className={styles.boxAndInput}>
                    <div className={styles.loginBox}>PW</div>
                    <input
                        className={styles.loginInput}
                        type='password'
                        id='newPW'
                        name='newPW'
                        onChange={e => {
                            setNewPW(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.boxAndBox}>
                    <button
                        type="button"
                        className={styles.signupButton}
                        onClick={e => {
                            if (newPW.length === 0) {
                              alert('새 비밀 번호를 입력하세요')
                            } else if (newPW.length < 9) {
                              alert('9자 이상의 비밀번호를 입력하십시오.')
                            } else {
                              setStat3(false);
                              setStat4(true);
                            }
                        }}>비밀 번호 변경
                    </button>
                </div>
            </form>
          </div>
          <div className={stat4 ? styles.findPW : styles.foundPW}>
            <h3>비밀 번호 변경이 완료 되었습니다.</h3>
          </div>
        </main>
      </>
    )
}