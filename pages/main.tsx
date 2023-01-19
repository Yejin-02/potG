import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/header'
import Button from '../components/button'

export default function Profile() {
  return(
    <>
      <Head>
        <title>PotG</title>
        <meta name="description" content="potG main" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/potg.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <h3>Pot G가 처음이라면? <Link href={{pathname:`/manual`}}>클릭하여 사용 방법 확인</Link></h3>
        <div className={styles.nav}>
          <Link href={{pathname:`/mypage`}} className={styles.linkBtn}><Button name="내 동승" /></Link>
          <div></div>
          <Link href={{pathname:`/select`}} className={styles.linkBtn}><Button name="동승 참여" /></Link>
        </div>
      </main>
    </>
    )
}