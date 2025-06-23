import axionInstance from '../../config/axios'

export const getList = async({currentPage, category, text}) => {
    try {
        const response = await axionInstance.get('/api/board/list', {
            params : {
                category : category,
                text : text,
                currentPage : currentPage
            }
        });
        return response.data;
    } catch(err) {
        console.log('게시글 불러오기 실패 : ' + err);
    }
}