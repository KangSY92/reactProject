import { useEffect, useState } from "react";
import { getList } from "../../api/board/ListApi"

export default function() {

    const [list, setList] = useState([]);

    const fetchList =() => {
        const response = getList();
        response.then(data => setList(data));
    }

    useEffect(() => {
        fetchList();
    })

    return (
        <>
        <section>
        <div className="table-container">
            <table>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
                {list.map((item, index) => (
                <tr key = {index}>
                    <td>0</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.createdDate}</td>
                    <td>{item.viewCount}</td>
                </tr>
                ))}
            </table>
            <button className="add-button" onClick="window.location.href = 'enrollForm.html'">등록</button>
        </div>
        </section>
        </>
    )
}