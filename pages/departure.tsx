import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/header'
import Button from '../components/button'
import { useRouter } from "next/router"

export default function Departure() {
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
          <div className={styles.departureText} style={{color: 'gray'}}>{travelInfo.departure}</div>
          <div className={styles.arrow}>&gt;</div>
          <div className={styles.arrivalText}>{travelInfo.arrival}</div>
        </div>
        <div className={styles.nav}>
          <Link href={{pathname:`/departure/1`, query: {d:"금남로 4가역", a:travelInfo.arrival, num:1}, }} as={`/departure/1`} className={styles.linkBtn}><Button name="금남로 4가역"/></Link><div></div>
          <Link href={{pathname:`/departure/2`, query: {d:"유스퀘어", a:travelInfo.arrival, num:2}, }} as={`/departure/2`} className={styles.linkBtn}><Button name="유스퀘어"/></Link><div></div>
          <Link href={{pathname:`/departure/3`, query: {d:"광주 송정역", a:travelInfo.arrival, num:3}, }} as={`/departure/3`} className={styles.linkBtn}><Button name="광주 송정역"/></Link><div></div>
          <Link href={{pathname:`/departure/4`, query: {d:"광주 공항", a:travelInfo.arrival, num:4}, }} as={`/departure/4`} className={styles.linkBtn}><Button name="광주 공항"/></Link><div></div>
        </div>
      </main>
    </>
  )
}