import Head from 'next/head'
import React, { useState } from 'react';
import styles from "../../styles/Home.module.css"
import ModalBase from '../ModalBase';
import CardModal from '../CardModal';
import { useRouter } from "next/router"
import Link from 'next/link';
import Header from '../../components/header';

const Participate = () => {
    const [isActive, setIsActive] = useState(false);    

    const onClickModalOn = () => {
        setIsActive(true);
    };

    const onClickMove = () => {
        router.replace('/mypage');
    };

    const router = useRouter()
    const { id, d, a, date, time, link } = router.query
    const potInfo = {
        potID: id,
        potDep: d,
        potArr: a,
        potDate: date,
        potTime: time,
        potLink: "http://naver.com"
    }
    
    return (
        <>
            <Head>
                <title>PotG</title>
                <meta name="description" content="potG main" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/potg.ico" />
            </Head>
            <main className={styles.main}>
                <Header/>
                <h3>이 택시팟에 참여하시겠습니까?</h3>
                <div className={styles.checkIn}>
                    <div className={styles.checkInText}>
                        <p>날짜: {potInfo.potDate}</p>
                        <p>시간: {potInfo.potTime}</p>
                        <p>출발지: {potInfo.potDep}</p>
                        <p>도착지: {potInfo.potArr}</p>
                    </div>
                    <button onClick={onClickModalOn} className={styles.checkInBtn}>예</button>
                    <ModalBase active={isActive}>
                        <CardModal actionEvent={onClickMove} title="택시 팟 참여가 완료되었습니다.">
                            <Link legacyBehavior href={potInfo.potLink}><a target="_blank" className={styles.kakaolink}>오픈 채팅 방</a></Link>에 접속해 파티원들을 만나보세요.
                        </CardModal>
                    </ModalBase>
                    <button onClick={() => router.back()} className={styles.checkInBtn}>아니요</button>
                </div>
            </main>
        </>
    );
}

export default Participate;