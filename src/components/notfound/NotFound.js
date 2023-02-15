import { useRouteError } from 'react-router-dom';



const NotFound = ()=>{
    const error = useRouteError();
    console.log(error)
    return "error 404"
}
export default NotFound;