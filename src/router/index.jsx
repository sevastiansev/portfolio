import { createBrowserRouter } from "react-router-dom";
import App from "../components/app/App";
import NotFound from "../components/notfound/NotFound";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<NotFound/>
    },
    {
        path:"/error",
        element:<NotFound/>
    }
]);