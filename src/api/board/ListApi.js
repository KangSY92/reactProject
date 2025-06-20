import axionInstance from '../../config/axios'

export const getList = async() => {
    try {
        const response = await axionInstance.get('/api/board/list', {
            params : {
                category : 'title',
                text : '',
                currentPage : 1
            }
        });
        return response.data;
    } catch(err) {
        console.log('게시글 불러오기 실패 : ' + err);
    }
}