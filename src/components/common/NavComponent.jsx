import { Link } from "react-router-dom"

export default function NavComponent() {
    return (
        <>
          <nav>
    <ul>
      <li><a href="home.html">홈</a></li>
      <li><a href="./introduce/introduce.html">소개</a></li>
      <li><a href="./portfolio/portfolio.html">포트폴리오</a></li>
      <li className="menu-item">
        <a href="#">게시판</a>
        <div className="submenu">
          <a href="./board/없음.html">뉴스 게시판</a>
          <Link to='/board/list'>자유 게시판</Link>
        </div>
      </li>
      <li><a href="./contact/contact.html">연락하기</a></li>
    </ul>
  </nav>
        </>
    )
}