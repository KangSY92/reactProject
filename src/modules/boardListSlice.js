import {createSlice, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit';
import { getList } from '../api/board/ListApi';

// 비동기 액션 생성
export const fetchBoardList = createAsyncThunk(
    "getBoardList", // 액션 타입 이름
    async(params, {rejectWithValue}) => {
        try{
            const response = await getList(params);
            return response;    // 성공시 payload로 반환
        } catch(err) {
            return rejectWithValue(err.response.data);  //실패시 에러응답을 payload로 반환
        }
    }
)

// 초기상태 정의
const initialState = {
    posts : [],
    pi : {},
    lodding : false,
    err : null
}

// 상태 + 리듀서 정의
const boardListSlice = createSlice({
    name : 'boardList', // slice 이름
    initialState, // 초기상태
    reducers : {}, // 리듀서
    extraReducers : (builder) => { // 비동기 액션을 상태별로 처리
        builder
            .addCase(fetchBoardList.pending, (state) => { // fetchBoardList 액션이 요청중 상태일 때
                state.lodding = true;
            })
            .addCase(fetchBoardList.fulfilled, (state, action) => { // fetchBoardList 액션이 성공했을 때
                state.posts = action.payload.posts;
                state.pi = action.payload.pi;
            })
            .addCase(fetchBoardList.rejected, (state, action) => { //fetchBoardList 액션이 실패했을 때
                state.err = action.payload;
            })
    }
})

export default boardListSlice.reducer;