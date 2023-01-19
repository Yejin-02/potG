import Head from 'next/head'
import styles from '../styles/Manual.module.css'
import Header from '../components/header'

export default function manual() {
    return(
      <>
        <Head>
          <title>PotG</title>
          <meta name="description" content="potG main" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/potg.ico" />
        </Head>
        <main className={styles.main}>
          <Header />
          <h3>팟쥐 이용 매뉴얼</h3>
          <div className={styles.manual}>
            <div className={styles.manualDiv}>
              <h3>기존 팟 참여 방법</h3>
              <ol>
                  <li>로그인 후, 메인 화면에서 '동승 참여하기' 선택</li>
                  <li>'학교 출발' 혹은 '학교 도착' 선택</li>
                  <li>출발지 혹은 도착지 선택</li>
                  <li>표에서 원하는 시간의 팟 참가 선택</li>
                  <li>팝업창에 표시되는 오픈채팅방 참여</li>
              </ol>
            </div>

            <div className={styles.manualDiv}>
              <h3>기존 팟 불참 방법</h3>
              <ol>
                  <li>해당 택시팟 오픈채팅방 퇴장</li>
                  <li>'내가 참여한 팟' - '내 동승 목록'에서 팟 삭제 가능</li>
              </ol>
            </div>

            <div className={styles.manualDiv}>
              <h3>내 팟 생성 방법</h3>
              <ol>
                  <li>출발 및 도착 장소, 출발 일자 및 시간 재확인</li>
                  <li>택시팟에 참여할 수 있는 카카오톡 오픈 채팅방 생성</li>
                  <li>오픈 채팅방 링크 업로드</li>
              </ol>
            </div>    

            <div className={styles.manualDiv}>
              <h3>내가 생성한 팟 관리 방법</h3>
              <ol type="a">
                  <li>참여자 강제 퇴장 방법</li>
                      <ol>
                          <li>해당 택시팟 오픈채팅방에서 참여자 강제 퇴장</li>
                          <li>'내 동승' - '조정' - '인원조정'에서 '-' 버튼으로 인원 조정</li>
                      </ol>
                  <li>구두 참여자가 추가 방법</li>
                      <ol>
                          <li>해당 택시팟 오픈채팅방에 참여자 초대</li>
                          <li>'내 동승' - '조정' - '인원조정'에서 '+' 버튼으로 인원 조정</li>
                      </ol>
              </ol>
            </div>
          </div>
        </main>
      </>
      )
  }