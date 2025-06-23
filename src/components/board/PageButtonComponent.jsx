import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function PageButtonComponent({handlePageButton}) {

    const {pi} = useSelector((state) => state.boardList);;

    return(
        <nav style={{backgroundColor : 'white', margin : 0}}>
            <ul className="pagination" style={{justifyContent : 'center'}}>

                <li className="page-item">
                { pi.currentPage > 1 ? ( // 현재 페이지가 1보다 클 때
                    <Link className="page-link" onClick={() => handlePageButton(pi.currentPage - 1)} style={{marginRight : 0}}>&laquo;</Link>

                ) : ( //현재 페이지가 1이거나 그보다 낮을때
                    <Link className="page-link" to = '#' style={{marginRight : 0}}>&laquo;</Link>
                )}
                </li>

                {/* 
                    Array.from() : 주어진 길이 만큼의 배열 생성
                    endPage : 5, startPage : 1 -> 5-1+1 -> 5
                 */}

                {Array.from({ length : pi.endPage - pi.startPage +1}).map(
                    (_, index) => {
                        const page = pi.startPage + index;
                        return (
                            <li className="page-item" key={index}>
                                <a className="page-link" onClick={() => handlePageButton(page)} style={{marginRight : 0}}>{page}</a>
                            </li>
                        )
                    }
                )
            }

                <li className="page-item">
                { pi.currentPage >= pi.maxPage ? (
                    <Link className="page-link" to="#" style={{marginRight : 0}}>&raquo;</Link>
                ) : (
                    <Link className="page-link" onClick={() => handlePageButton(pi.currentPage + 1)} style={{marginRight : 0}}>&raquo;</Link>
                )

                }
                </li>
            </ul>
        </nav>
    )
}