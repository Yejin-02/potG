import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/header'
import Button from '../components/button'

export default function Select() {
    const travelInfo = {
      departure: "출발지",
      arrival: "도착지",
    }
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
            <div className={styles.travelInfo}>
              <div className={styles.departureText} style={{color: 'gray'}}>{travelInfo.departure}</div>
              <div className={styles.arrow}>&gt;</div>
              <div className={styles.arrivalText} style={{color: 'gray'}}>{travelInfo.arrival}</div>
            </div>
            <div className={styles.nav}>
              <Link href={{pathname:`/departure`, query: {d:travelInfo.departure, a:"학교"}, }} as={`/departure`} className={styles.linkBtn}><Button name="학교로 도착하기"/></Link>
              <div></div>
              <Link href={{pathname:`/arrival`, query: {d:"학교", a:travelInfo.arrival}, }} as={`/arrival`} className={styles.linkBtn}><Button name="학교에서 출발하기"/></Link>
            </div>
        </main>
      </>
      )
  }