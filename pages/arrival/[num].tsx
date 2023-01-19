import Head from 'next/head'
import Link from 'next/link'
import mainStyles from '../../styles/main.module.css'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import PotList from '../../components/potList'
import { useRouter } from "next/router"

export default function ArrivalList() {
    const router = useRouter()
    const { num, d, a } = router.query
    const n = num
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
            <main className={mainStyles.main}>
                <Header/>
                <div className={styles.travelInfo}>
                    <div className={styles.departureText}>{travelInfo.departure}</div>
                    <div className={styles.arrow}>&gt;</div>
                    <div className={styles.arrivalText}>{travelInfo.arrival}</div>
                </div>
                <PotList departure={travelInfo.departure} arrival={travelInfo.arrival}></PotList>
            </main>
        </>
    )
}