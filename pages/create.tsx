import Head from 'next/head'
import mainStyles from '../styles/main.module.css'
import styles from '../styles/create.module.css'
import React from 'react';
import Link from 'next/link'
import Header from '../components/header'

export default function Create() {
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
            <h3>새로운 택시팟 생성</h3>
                <p>택시 팟을 처음 만들어 본다면? <Link href={{pathname: `/manual`}}>클릭해서 매뉴얼 확인</Link></p>
                <form className={styles.form}>
                    <label htmlFor='departure'>출발지</label>
                    <select name="departure" id="departure">
                        <option value="광주 송정역">광주 송정역</option>
                        <option value="광주 공항">광주 공항</option>
                        <option value="유스퀘어">유스퀘어</option>
                        <option value="금남로 4가역">금남로 4가역</option>
                        <option value="학교">학교</option>
                    </select>
                    <br/>
                    <label htmlFor='arrival'>도착지</label>
                    <select name="arrival" id="arrival">
                    <option value="광주 송정역">광주 송정역</option>
                        <option value="광주 공항">광주 공항</option>
                        <option value="유스퀘어">유스퀘어</option>
                        <option value="금남로 4가역">금남로 4가역</option>
                        <option value="학교">학교</option>
                    </select>
                    <br/>
                    <label htmlFor="member">참여 인원</label>
                    <select name="member" id="member">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;/4
                    <br />
                    <label htmlFor="hour">출발 날짜</label>
                    <select name="year" id="year">
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>년&nbsp;
                    <select name="month" id="month">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">3</option>
                        <option value="2">4</option>
                        <option value="2">5</option>
                        <option value="2">6</option>
                        <option value="2">7</option>
                        <option value="2">8</option>
                        <option value="2">9</option>
                        <option value="0">10</option>
                        <option value="1">11</option>
                        <option value="2">12</option>
                    </select>월&nbsp;
                    <select name="date" id="date">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">3</option>
                        <option value="2">4</option>
                        <option value="2">5</option>
                        <option value="2">6</option>
                        <option value="2">7</option>
                        <option value="2">8</option>
                        <option value="2">9</option>
                        <option value="0">10</option>
                        <option value="1">11</option>
                        <option value="2">12</option>
                        <option value="2">13</option>
                        <option value="2">14</option>
                        <option value="2">15</option>
                        <option value="2">16</option>
                        <option value="2">17</option>
                        <option value="2">18</option>
                        <option value="2">19</option>
                        <option value="0">20</option>
                        <option value="1">21</option>
                        <option value="2">22</option>
                        <option value="2">23</option>
                        <option value="2">24</option>
                        <option value="2">25</option>
                        <option value="2">26</option>
                        <option value="2">27</option>
                        <option value="2">28</option>
                        <option value="2">29</option>
                        <option value="2">30</option>
                        <option value="2">31</option>
                    </select>일
                    <br/>
                    <label htmlFor="hour">출발 시간</label>
                    <select name="hour" id="hour">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">3</option>
                        <option value="2">4</option>
                        <option value="2">5</option>
                        <option value="2">6</option>
                        <option value="2">7</option>
                        <option value="2">8</option>
                        <option value="2">9</option>
                        <option value="0">10</option>
                        <option value="1">11</option>
                        <option value="2">12</option>
                        <option value="2">13</option>
                        <option value="2">14</option>
                        <option value="2">15</option>
                        <option value="2">16</option>
                        <option value="2">17</option>
                        <option value="2">18</option>
                        <option value="2">19</option>
                        <option value="0">20</option>
                        <option value="1">21</option>
                        <option value="2">22</option>
                        <option value="2">23</option>
                    </select>시&nbsp;
                    <select name="min" id="min">
                        <option value="0">00</option>
                        <option value="1">10</option>
                        <option value="2">20</option>
                        <option value="2">30</option>
                        <option value="2">40</option>
                        <option value="2">50</option>
                    </select>분
                    <br/>
                    <p id={styles.linkLabel}>링크</p>
                    <input
                        type="text"
                        placeholder="카카오톡 오픈 채팅방 링크"
                        name="kakaolink"
                        id="kakaolink"
                    />
                </form>
                <button className={styles.btn}>등록하기</button>
        </main>
        </>
    )
}