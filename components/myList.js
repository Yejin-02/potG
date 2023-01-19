import styles from "../styles/myList.module.css"
import Link from 'next/link'

function MyList(departure, arrival) {
    const pot1 = {
        no: 1,
        year: 22,
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
        year: 22,
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
                        <th>출발</th>
                        <th>도착</th>
                        <th>날짜</th>
                        <th>시간</th>
                        <th>인원</th>
                        <th>조정</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pot1.departure}</td>
                        <td>{pot1.arrival}</td>
                        <td>{pot1.year}-{pot1.month}-{pot1.date}</td>
                        <td>{pot1.hour}:{pot1.minute}</td>
                        <td>{pot1.people}/4</td>
                        <td><button>불참</button></td>
                    </tr>
                    <tr>
                        <td>{pot2.departure}</td>
                        <td>{pot2.arrival}</td>
                        <td>{pot2.year}-{pot2.month}-{pot2.date}</td>
                        <td>{pot2.hour}:{pot2.minute}</td>
                        <td>{pot2.people}/4</td>
                        <td><button>up</button><button>down</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyList;