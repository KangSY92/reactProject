import {useSelector} from 'react-redux';

export default function PostsComponent() {

    //config/redux.js에서 만든 액션의 상태(변수들) 가져오기
    const {posts, pi} = useSelector((state) => state.boardList);

    

    return (
        <>
        <div className="table-container">
            <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(posts) && posts.map((item, index) => (
                    <tr key = {index}>
                    <td>{pi.row - index}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.createdDate}</td>
                    <td>{item.viewCount}</td>
                </tr>
                ))}
                </tbody>
            </table>
            <button className="add-button">등록</button>
        </div>
        </>
    )
}