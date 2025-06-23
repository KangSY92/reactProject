import { useDispatch } from "react-redux"
import PostsComponent from "../../components/board/PostsComponent"
import FooterComponent from "../../components/common/footerComponent"
import HeaderComponect from "../../components/common/headerComponect"
import NavComponent from "../../components/common/navComponent"
import SearchComponent from "../../components/board/SearchComponent"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchBoardList } from "../../modules/boardListSlice"
import PageButtonComponent from "../../components/board/PageButtonComponent"

export default function List() {

    const dispatch = useDispatch();
    const location = useLocation();
    const [selectText, setSelectText] = useState('');
    const [selectCategory, setSelectCategory] = useState('title');

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const currentPage = params.get('currentPage') || 1;
        const category = params.get('category') || 'title';
        const text = params.get('text') || '';

        setSelectText(text);
        setSelectCategory(category);

        dispatch(
            fetchBoardList({
                currentPage: currentPage,
                category: selectCategory,
                text: selectText
            })
        )
    }, [dispatch])

    const handleSearch = () => {
        dispatch(
            fetchBoardList({
                currentPage: 1,
                category: selectCategory,
                text: selectText
            })
        )
    }

    const handlePageButton = (currentPage) => {
        dispatch(
            fetchBoardList({
                currentPage: currentPage,
                category: selectCategory,
                text: selectText
            })
        )
    }

    return (
        <>
            <HeaderComponect></HeaderComponect>
            <NavComponent></NavComponent>
            <section>
                <SearchComponent
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                    setSelectText={setSelectText}
                    handleSearch={handleSearch}></SearchComponent>
                <PostsComponent></PostsComponent>
                <PageButtonComponent handlePageButton={handlePageButton}></PageButtonComponent>
            </section>
            <FooterComponent></FooterComponent>
        </>
    )
}