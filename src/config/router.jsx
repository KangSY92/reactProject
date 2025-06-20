import { createBrowserRouter } from "react-router-dom";
import { BoardRouter } from "../router/BoardRouter";
import App from "../App";


const router = createBrowserRouter([
    {
        path : '/',
        element : <App></App>
    },
    {
        path : '/board/*',
        element : <BoardRouter></BoardRouter>
    }
])

export default router;