import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/header'
import Button from '../components/btn'
import { useRouter } from "next/router"

export default function arrival() {
  const router = useRouter()
  const { d, a } = router.query
  const travelInfo = {
	  departure: d,
		arrival: a
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
          <div className={styles.departureText}>{travelInfo.departure}</div>
          <div className={styles.arrow}>&gt;</div>
          <div className={styles.arrivalText} style={{color: 'gray'}}>{travelInfo.arrival}</div>
        </div>
        <div className={styles.nav}>
          <Link href={{pathname:`/arrival/1`, query: {d:travelInfo.departure, a:"금남로 4가역"}, }} as={`/arrival/1`} className={styles.linkBtn}><Button name="금남로 4가역"/></Link><div></div>
          <Link href={{pathname:`/arrival/2`, query: {d:travelInfo.departure, a:"유스퀘어"}, }} as={`/arrival/2`} className={styles.linkBtn}><Button name="유스퀘어"/></Link><div></div>
          <Link href={{pathname:`/arrival/3`, query: {d:travelInfo.departure, a:"광주 송정역"}, }} as={`/arrival/3`} className={styles.linkBtn}><Button name="광주 송정역"/></Link><div></div>
          <Link href={{pathname:`/arrival/4`, query: {d:travelInfo.departure, a:"광주 공항"}, }} as={`/arrival/4`} className={styles.linkBtn}><Button name="광주 공항"/></Link><div></div>
        </div>
      </main>
    </>
  )
}