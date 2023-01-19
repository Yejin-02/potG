import styles from "../styles/potList.module.css"
import Link from 'next/link'

function List(departure, arrival) {
    const pot1 = {
        no: 1,
        year: 2022,
        month: 12,
        date: 24,
        hour: 14,
        minute: 40,
        people: 3,
        link: "https://www.youtube.com/watch?v=kctNCMFxciQ&t=58s",
        departure: "광주 송정역",
        arrival: "학교",
        id: 12345678
    }
        
    const pot2 = {
        no: 2,
        year: 2022,
        month: 12,
        date: 25,
        hour: 17,
        minute: 10,
        people: 1,
        link: "http://www.naver.com",
        departure: "학교",
        arrival: "유스퀘어",
        id: 12345679
    }
    
    return (
        <div className={styles.listDiv}>
            <table className={styles.list}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>날짜</th>
                        <th>시간</th>
                        <th>인원</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pot1.no}</td>
                        <td>{pot1.year}-{pot1.month}-{pot1.date}</td>
                        <td>{pot1.hour}:{pot1.minute}</td>
                        <td>{pot1.people}/4</td>
                        <td><Link href={{pathname:`/participate/${pot1.id}`, query: {d: pot1.departure, a: pot1.arrival, id: pot1.id, date: pot1.year+'/'+pot1.month+'/'+pot1.date, time: pot1.hour+':'+pot1.minute, link: pot1.link}, }} as={`/participate/${pot1.id}`} class="linkBtn">참여</Link></td>
                    </tr>
                    <tr>
                        <td>{pot2.no}</td>
                        <td>{pot2.year}-{pot2.month}-{pot2.date}</td>
                        <td>{pot2.hour}:{pot2.minute}</td>
                        <td>{pot2.people}/4</td>
                        <td><Link href={{pathname:`/participate/${pot2.id}`, query: {d: pot2.departure, a: pot2.arrival, id: pot2.id, date: pot2.year+'/'+pot2.month+'/'+pot2.date, time: pot2.hour+':'+pot2.minute, link: pot2.link}, }} as={`/participate/${pot2.id}`} class="linkBtn">참여</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default List;