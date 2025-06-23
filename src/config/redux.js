import { configureStore} from '@reduxjs/toolkit';
import boardListReducer from '../modules/boardListSlice';


export default configureStore({
    reducer: {
        boardList : boardListReducer
    }

})