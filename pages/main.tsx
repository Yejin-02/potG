import Head from 'next/head'
import mainStyles from '../styles/main.module.css'
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
      <main className={mainStyles.main}>
        <Header/>
        <h3>Pot G가 처음이라면? <Link href={{pathname:`/manual`}}>클릭하여 사용 방법 확인</Link></h3>
        <div>
          <Link href={{pathname:`/select`}} className={styles.linkBtn}><Button name="동승 참여하기" /></Link>
        </div>
      </main>
    </>
    )
}