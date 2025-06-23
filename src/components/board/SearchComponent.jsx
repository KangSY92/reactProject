export default function searchComponent({selectCategory, setSelectCategory, setSelectText, handleSearch}) {
    return(
        <>
        <form className="d-flex align-items-center">
        <div className="input-group mb-3" style={{width:'100%', marginTop : 40}}>
            <select
                className="form=select me-2"
                name="category"
                style={{width : 100, height: 46, flex : "0 0 auto"}}
                defaultValue={selectCategory}
                onChange={(e) => setSelectCategory(e.target.value)}
                >
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="author">작성자</option>
            </select>

            <input
                type="text"
                className="form-control me-2"
                placeholder="검색어를 입력해주세요"
                style={{width : 500, flex : "0 0 auto"}}
                // onChange={(e) => setSelectText(e.target.value)}
                onKeyUp={(e) => setSelectText(e.target.value)}
                ></input>
            <button type="button" className="btn btn-outline-secondary" style={{height : 46}} onClick={handleSearch}>검색</button>
        </div>
        </form>
        </>
    )
}